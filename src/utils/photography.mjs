export const filterFields = ["Country", "City", "Camera", "Lens"];

export function photoFields(photo) {
    return Object.fromEntries((photo.infoSections || []).flatMap(section =>
        section.rows.map(row => [row.label, row.value])));
}

export function selectPhotos(photos, filters, sort, shuffleOrder = [], search = "") {
    const result = photos.filter(photo => {
        const fields = photoFields(photo);
        const matchesFilters = Object.entries(filters).every(([field, value]) => {
            const values = Array.isArray(value) ? value : value ? [value] : [];
            return values.length === 0 || values.includes(fields[field]);
        });
        const text = [photo.title, photo.displayTitle, photo.description, ...Object.values(fields)].filter(Boolean).join(" ").toLowerCase();
        return matchesFilters && text.includes(search.trim().toLowerCase());
    });
    const ranks = new Map(shuffleOrder.map((id, index) => [id, index]));
    return result.sort((a, b) => {
        if (sort === "shuffle") return (ranks.get(a.id) ?? Infinity) - (ranks.get(b.id) ?? Infinity);
        if (sort.startsWith("title")) {
            const comparison = (a.title || a.displayTitle || a.id).localeCompare(b.title || b.displayTitle || b.id, undefined, {numeric: true});
            return (sort === "title-asc" ? comparison : -comparison) || a.id.localeCompare(b.id);
        }
        const value = photo => sort.startsWith("size") ? photo.fileSize : Date.parse(photo.dateTaken);
        const left = value(a), right = value(b);
        const missingLeft = left == null || !Number.isFinite(left);
        const missingRight = right == null || !Number.isFinite(right);
        if (missingLeft !== missingRight) return missingLeft ? 1 : -1;
        if (missingLeft) return a.id.localeCompare(b.id);
        return (sort.endsWith("asc") ? left - right : right - left) || a.id.localeCompare(b.id);
    });
}

export function shuffledPhotoIds(photos) {
    const ids = photos.map(photo => photo.id);
    for (let i = ids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    return ids;
}
