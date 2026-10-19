"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import {Info, X} from "lucide-react";
import PhotographyControls from "./photography-controls";
import PhotographyStage from "./photography-stage";
import PhotographyInfo from "./photography-info";
import PhotographyHoverInfo from "./photography-hover-info";
import {filterFields, photoFields, selectPhotos, shuffledPhotoIds} from "@/utils/photography.mjs";
import styles from "./photography-gallery.module.css";

export default function PhotographyGallery({photos}) {
    const [active, setActive] = useState(null);
    const [filters, setFilters] = useState({});
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("date-desc");
    const [shuffleOrder, setShuffleOrder] = useState([]);
    const options = useMemo(() => {
        const fields = photos.map(photoFields);
        return Object.fromEntries(filterFields.map(field => [field,
            [...new Set(fields.map(values => values[field]).filter(Boolean))].sort((a, b) => a.localeCompare(b))]));
    }, [photos]);
    const visiblePhotos = useMemo(() => selectPhotos(photos, filters, sort, shuffleOrder, search), [photos, filters, sort, shuffleOrder, search]);

    function shuffle() {
        setShuffleOrder(shuffledPhotoIds(photos));
        setSort("shuffle");
    }
    const dialog = useRef(null);
    const opener = useRef(null);
    const [showInfo, setShowInfo] = useState(false);
    const strip = useRef(null);
    const photo = active === null ? null : visiblePhotos[active];
    const isOpen = active !== null;

    useEffect(() => {
        if (!isOpen) return;
        const element = dialog.current;
        const previousOverflow = document.body.style.overflow;
        element.showModal();
        document.body.style.overflow = "hidden";
        return () => {
            element.close();
            document.body.style.overflow = previousOverflow;
            opener.current?.focus({preventScroll: true});
        };
    }, [isOpen]);

    useEffect(() => {
        if (active === null) return;
        const selected = strip.current?.children[active];
        if (selected) {
            strip.current.scrollLeft = selected.offsetLeft - strip.current.clientWidth / 2 + selected.clientWidth / 2;
        }
    }, [active]);

    function move(direction) {
        setActive(index => (index + direction + visiblePhotos.length) % visiblePhotos.length);
    }

    function close() {
        setActive(null);
    }

    return (
        <>
            <PhotographyControls options={options} filters={filters} setFilters={setFilters}
                                 search={search} setSearch={setSearch} sort={sort} setSort={setSort}
                                 onShuffle={shuffle} count={visiblePhotos.length} total={photos.length}/>
            {visiblePhotos.length === 0 && <div className={styles.emptyGallery}>
                <p>No photos match these filters.</p>
                <button type="button" className={styles.clearFilters} onClick={() => { setFilters({}); setSearch(""); }}>Clear filters</button>
            </div>}
            <div className={styles.grid}>
                {visiblePhotos.map((item, index) => (
                    <button key={item.id} type="button" className={styles.tile}
                            aria-label={`Open photo ${index + 1}${item.title ? `: ${item.title}` : ""}`}
                            onClick={event => {
                                opener.current = event.currentTarget;
                                setShowInfo(window.matchMedia("(min-width: 769px)").matches);
                                setActive(index);
                            }}>
                        {/* Existing thumbnails are already optimized by the photo pipeline. */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.thumbnail} alt={item.alt} width={item.width} height={item.height}
                             loading={index < 4 ? "eager" : "lazy"} decoding="async"/>
                        {item.video && <span className={styles.liveBadge}>LIVE</span>}
                        <PhotographyHoverInfo photo={item}/>
                    </button>
                ))}
            </div>
            <dialog ref={dialog} className={styles.viewer} aria-label="Photography viewer"
                    onCancel={event => { event.preventDefault(); close(); }}
                    onKeyDown={event => {
                        // Keep native button activation and thumbnail keyboard navigation intact.
                        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                            event.preventDefault();
                            move(event.key === "ArrowLeft" ? -1 : 1);
                        }
                    }}>
                {photo && (
                    <div className={styles.viewerContent}>
                        <div className={styles.toolbar}>
                            <p aria-live="polite" aria-atomic="true">
                                <span className={styles.counter}>{active + 1} / {visiblePhotos.length}</span>
                                {photo.title && <span className={styles.title}>{photo.title}</span>}
                            </p>
                            <div className={styles.toolbarActions}>
                            <button type="button" className={styles.control} aria-label="Photo information" aria-expanded={showInfo} aria-controls="photo-information" onClick={() => setShowInfo(value => !value)}><Info size={20}/></button>
                            <button type="button" className={styles.control} onClick={close} aria-label="Close viewer" autoFocus><X size={22}/></button>
                            </div>
                        </div>
                        <div className={styles.viewerBody}>
                            <PhotographyStage key={photo.id} photo={photo} onPrevious={() => move(-1)} onNext={() => move(1)}/>
                            {showInfo && <PhotographyInfo key={`info-${photo.id}`} photo={photo} onClose={() => {
                                setShowInfo(false);
                                dialog.current?.querySelector('[aria-controls="photo-information"]')?.focus();
                            }}/>}
                        </div>
                        <div ref={strip} className={styles.strip} aria-label="Photo thumbnails">
                            {visiblePhotos.map((item, index) => (
                                <button key={item.id} type="button" onClick={() => setActive(index)}
                                        aria-label={`View photo ${index + 1}`} aria-current={index === active ? "true" : undefined}
                                        className={styles.thumbnail}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={item.thumbnail} alt="" loading="lazy" width={64} height={64}/>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </dialog>
        </>
    );
}
