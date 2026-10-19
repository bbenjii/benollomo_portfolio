"use client";

import {useEffect, useState} from "react";
import {File, Database, Scan, Grid2X2, Calendar, Palette, User, AppWindow, Globe, MapPin, Building, Locate, Telescope, Aperture, Clock, Sun, Camera, Focus, ZoomIn, Zap, Image, X} from "lucide-react";
import styles from "./photography-gallery.module.css";

const icons = {File, Database, Scan, Grid2X2, Calendar, Palette, User, AppWindow, Globe, MapPin, Building, Locate, Telescope, Aperture, Clock, Sun, Camera, Focus, ZoomIn, Zap, Image};
let histogramRequest;

function Histogram({photoId}) {
    const [catalog, setCatalog] = useState(null);
    const [failed, setFailed] = useState(false);
    useEffect(() => {
        let cancelled = false;
        histogramRequest ||= fetch("/photography-histograms.json").then(response => {
            if (!response.ok) throw new Error("Histogram unavailable");
            return response.json();
        }).catch(error => { histogramRequest = null; throw error; });
        histogramRequest.then(data => { if (!cancelled) setCatalog(data); })
            .catch(() => { if (!cancelled) setFailed(true); });
        return () => { cancelled = true; };
    }, []);
    const bins = catalog?.[photoId];
    if (!bins) return <div className={styles.histogramStatus} role="status">{failed || catalog ? "Histogram unavailable" : "Loading histogram…"}</div>;
    const maximum = Math.max(1, ...bins.flat());
    return (
        <svg className={styles.histogram} viewBox="0 0 256 128" preserveAspectRatio="none" role="img" aria-label="Red, green, blue and luminance histogram">
            {[64, 128, 192].map(x => <line key={x} x1={x} y1="0" x2={x} y2="128" stroke="currentColor" opacity=".15"/>)}
            {[3, 0, 1, 2].map(channel => <g key={channel} fill={["#ff6259", "#2ed157", "#3b9aff", "#fff"][channel]} opacity={channel === 3 ? .25 : .55}>
                {bins[channel].map((count, i) => <rect key={i} x={i * 2} y={128 - count / maximum * 128} width="2" height={count / maximum * 128}/>)}
            </g>)}
        </svg>
    );
}

export default function PhotographyInfo({photo, onClose}) {
    const location = photo.location;
    const mapUrl = location ? `https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude - .015},${location.latitude - .01},${location.longitude + .015},${location.latitude + .01}&layer=mapnik&marker=${location.latitude},${location.longitude}` : null;
    function section(section) {
        return <section key={section.title} className={styles.infoSection}>
            <h3>{section.title}</h3>
            <dl>{section.rows.map(({label, value, icon}) => {
                const Icon = icons[icon] || File;
                return <div key={label} className={styles.infoRow}>
                    <Icon size={16} aria-hidden="true"/>
                    <dt>{label}</dt><dd>{value}</dd>
                </div>;
            })}</dl>
        </section>;
    }
    const sections = photo.infoSections || [];
    return (
        <aside id="photo-information" aria-label="Photo information" className={styles.infoPanel}>
            <div className={styles.infoHeader}>
                <h2 title={photo.displayTitle || photo.title}>{photo.displayTitle || photo.title || photo.id}</h2>
                <button type="button" className={styles.infoClose} aria-label="Close photo information" onClick={onClose}><X size={18}/></button>
            </div>
            <div className={styles.infoContent}>
                {photo.description && <p className={styles.description}>{photo.description}</p>}
                {location && <div className={styles.miniMap}>
                    <iframe key={photo.id} title="Photo location map" src={mapUrl} loading="lazy" referrerPolicy="no-referrer"/>
                    <a href={`https://www.openstreetmap.org/?mlat=${location.latitude}&mlon=${location.longitude}#map=14/${location.latitude}/${location.longitude}`} target="_blank" rel="noopener noreferrer">Explore location ↗</a>
                </div>}
                {sections.filter(item => item.title === "Basic information").map(section)}
                {sections.filter(item => item.title === "Shooting Parameters").map(section)}
                <section className={styles.infoSection}><h3>Histogram</h3><Histogram photoId={photo.id}/></section>
                {sections.filter(item => !["Basic information", "Shooting Parameters"].includes(item.title)).map(section)}
            </div>
        </aside>
    );
}
