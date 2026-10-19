import {Camera, Aperture, Timer, Sun, Focus} from "lucide-react";
import styles from "./photography-gallery.module.css";

export default function PhotographyHoverInfo({photo}) {
    const fields = Object.fromEntries((photo.infoSections || []).flatMap(section =>
        section.rows.map(row => [row.label, row.value])));
    const dateAndCity = [fields["Shooting Time"]?.slice(0, 10), fields.City].filter(Boolean).join(" · ");
    const settings = [
        [Focus, fields["35mm Equivalent"]],
        [Aperture, fields["Aperture Value"]],
        [Timer, fields["Exposure Time"]],
        [Sun, fields.ISO ? `ISO ${fields.ISO}` : null],
    ].filter(([, value]) => value);

    return (
        <span className={styles.tileLabel}>
            {(photo.title || photo.displayTitle) && <span className={styles.hoverTitle}>{photo.title || photo.displayTitle}</span>}
            {photo.description && <span className={styles.hoverDescription}>{photo.description}</span>}
            {dateAndCity && <span className={styles.hoverDate}>{dateAndCity}</span>}
            {photo.tags?.length > 0 && <span className={styles.hoverTags}>{photo.tags.map(tag => <span key={tag}>{tag}</span>)}</span>}
            {fields.Camera && <span className={styles.hoverCamera}><Camera size={14} aria-hidden="true"/><span>{fields.Camera}</span></span>}
            {settings.length > 0 && <span className={styles.hoverSettings}>{settings.map(([Icon, value], index) =>
                <span key={index}><Icon size={13} aria-hidden="true"/>{value}</span>
            )}</span>}
        </span>
    );
}
