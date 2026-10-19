"use client";

import {useEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight, Play, ZoomIn, ZoomOut, RotateCcw} from "lucide-react";
import styles from "./photography-gallery.module.css";

export default function PhotographyStage({photo, onPrevious, onNext}) {
    const canvas = useRef(null);
    const image = useRef(null);
    const pointers = useRef(new Map());
    const gesture = useRef(null);
    const current = useRef({scale: 1, x: 0, y: 0});
    const [view, setView] = useState(current.current);
    const [playing, setPlaying] = useState(false);
    const [videoError, setVideoError] = useState(false);

    function update(scale, x = current.current.x, y = current.current.y) {
        scale = Math.max(1, Math.min(4, scale));
        const maxX = Math.max(0, ((image.current?.clientWidth || 0) * scale - (canvas.current?.clientWidth || 0)) / 2);
        const maxY = Math.max(0, ((image.current?.clientHeight || 0) * scale - (canvas.current?.clientHeight || 0)) / 2);
        const next = {scale, x: Math.max(-maxX, Math.min(maxX, x)), y: Math.max(-maxY, Math.min(maxY, y))};
        current.current = next;
        setView(next);
    }

    useEffect(() => {
        const element = canvas.current;
        function wheel(event) {
            event.preventDefault();
            update(current.current.scale * Math.exp(-event.deltaY * .002));
        }
        element.addEventListener("wheel", wheel, {passive: false});
        const observer = new ResizeObserver(() => update(current.current.scale));
        observer.observe(element);
        return () => { element.removeEventListener("wheel", wheel); observer.disconnect(); };
    }, []);

    function beginGesture() {
        const points = [...pointers.current.values()];
        gesture.current = points.length === 2
            ? {distance: Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y), scale: current.current.scale, pinch: true}
            : points.length === 1 ? {...points[0], ...current.current, startX: points[0].x, startY: points[0].y} : null;
    }

    return (
        <div className={styles.stage}>
            <div ref={canvas} className={styles.canvas} data-zoom={view.scale.toFixed(2)}
                 style={{cursor: view.scale > 1 ? "grab" : "zoom-in"}}
                 onDoubleClick={() => update(current.current.scale > 1 ? 1 : 2)}
                 onPointerDown={event => {
                     if (event.button !== 0) return;
                     event.currentTarget.setPointerCapture(event.pointerId);
                     pointers.current.set(event.pointerId, {x: event.clientX, y: event.clientY});
                     beginGesture();
                 }}
                 onPointerMove={event => {
                     if (!pointers.current.has(event.pointerId) || !gesture.current) return;
                     pointers.current.set(event.pointerId, {x: event.clientX, y: event.clientY});
                     const points = [...pointers.current.values()];
                     const start = gesture.current;
                     if (points.length === 2 && start.distance) {
                         update(start.scale * Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y) / start.distance);
                     } else if (points.length === 1 && current.current.scale > 1 && !start.pinch) {
                         update(current.current.scale, start.x + event.clientX - start.startX, start.y + event.clientY - start.startY);
                     }
                 }}
                 onPointerUp={event => {
                     const start = gesture.current;
                     pointers.current.delete(event.pointerId);
                     if (start && !start.pinch && current.current.scale === 1 && event.pointerType === "touch") {
                         const dx = event.clientX - start.startX;
                         const dy = event.clientY - start.startY;
                         if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? onNext : onPrevious)();
                     }
                     // A remaining finger after pinching must not become a navigation swipe.
                     if (!pointers.current.size) gesture.current = null;
                 }}
                 onPointerCancel={() => { pointers.current.clear(); gesture.current = null; }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img ref={image} src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
                     draggable={false} className={styles.fullImage}
                     style={{transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`, backgroundImage: `url("${photo.thumbnail}")`}}/>
            </div>
            {playing && <div className={styles.liveOverlay}>
                <video src={photo.video} poster={photo.src} autoPlay muted playsInline controls
                       aria-label="Live Photo video" onEnded={() => setPlaying(false)}
                       onError={() => { setPlaying(false); setVideoError(true); }}/>
                <button type="button" className={styles.textControl} onClick={() => setPlaying(false)}>Back to photo</button>
            </div>}
            <div className={styles.zoomControls}>
                <button type="button" className={styles.control} aria-label="Zoom out" disabled={view.scale === 1} onClick={() => update(view.scale - .5)}><ZoomOut size={18}/></button>
                <span className={styles.zoomLabel} aria-live="polite">{Math.round(view.scale * 100)}%</span>
                <button type="button" className={styles.control} aria-label="Zoom in" disabled={view.scale === 4} onClick={() => update(view.scale + .5)}><ZoomIn size={18}/></button>
                <button type="button" className={styles.control} aria-label="Reset zoom" onClick={() => update(1)}><RotateCcw size={18}/></button>
                {photo.video && <button type="button" className={styles.textControl} onClick={() => { update(1); setVideoError(false); setPlaying(true); }}><Play size={16}/> Live</button>}
            </div>
            {videoError && <p role="status" className={styles.videoError}>This Live Photo couldn’t play. You can still view the photo.</p>}
            <button type="button" className={`${styles.control} ${styles.previous}`} onClick={onPrevious} aria-label="Previous photo"><ChevronLeft/></button>
            <button type="button" className={`${styles.control} ${styles.next}`} onClick={onNext} aria-label="Next photo"><ChevronRight/></button>
        </div>
    );
}
