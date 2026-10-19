"use client";

import {useState} from "react";
import {Popover, PopoverButton, PopoverGroup, PopoverPanel, Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import {Filter, ArrowDownWideNarrow, ArrowUpWideNarrow, ArrowDownAZ, ArrowUpAZ, Shuffle, Search, X, Check, Camera, Aperture, MapPin, Globe} from "lucide-react";
import styles from "./photography-gallery.module.css";

const categories = [["Camera", "Cameras", Camera], ["Lens", "Lenses", Aperture], ["City", "Cities", MapPin], ["Country", "Countries", Globe]];
const sorts = [
    ["date-desc", "Newest first", ArrowDownWideNarrow], ["date-asc", "Oldest first", ArrowUpWideNarrow],
    ["title-asc", "Title A–Z", ArrowDownAZ], ["title-desc", "Title Z–A", ArrowUpAZ],
    ["size-asc", "Smallest file first", ArrowUpWideNarrow], ["size-desc", "Largest file first", ArrowDownWideNarrow],
];

export default function PhotographyControls({options, filters, setFilters, search, setSearch, sort, setSort, onShuffle, count, total}) {
    const [searchOpen, setSearchOpen] = useState(false);
    const selectedCount = Object.values(filters).reduce((sum, values) => sum + values.length, 0);
    const CurrentSortIcon = sort === "shuffle" ? Shuffle : sorts.find(([key]) => key === sort)[2];

    function toggle(field, value) {
        setFilters(current => {
            const values = current[field] || [];
            return {...current, [field]: values.includes(value) ? values.filter(item => item !== value) : [...values, value]};
        });
    }

    return (
        <div className={styles.galleryTools}>
            <span className={styles.resultCount} role="status">{count === total ? `${total} photos` : `${count} of ${total} photos`}</span>
            <PopoverGroup className={styles.controlPill}>
                <Popover className={styles.controlPopover}>
                    <PopoverButton className={styles.pillButton} aria-label="Filter photos" title="Filter photos" data-active={selectedCount > 0 || Boolean(search) || undefined}>
                        <Filter size={17}/>{(selectedCount > 0 || search) && <span className={styles.filterDot}/>}
                    </PopoverButton>
                    <PopoverPanel className={`${styles.controlsPanel} ${styles.filterPanel}`}>
                        <div className={styles.panelHeading}>
                            <h2>Filter photos</h2>
                            <div className={styles.panelActions}>
                                {(selectedCount > 0 || search) && <button type="button" className={styles.clearFilters} onClick={() => {setFilters({}); setSearch(""); setSearchOpen(false);}}>Clear all</button>}
                                <button type="button" className={styles.pillButton} aria-label="Search photos" title="Search photos" onClick={() => setSearchOpen(value => !value)}><Search size={16}/></button>
                                <button type="button" className={styles.pillButton} aria-label="Shuffle photos" title="Shuffle photos" onClick={onShuffle}><Shuffle size={16}/></button>
                            </div>
                        </div>
                        {(searchOpen || search) && <div className={styles.photoSearch}>
                            <Search size={16} aria-hidden="true"/>
                            <input autoFocus aria-label="Search photo details" placeholder="Search photo details…" value={search} onChange={event => setSearch(event.target.value)}/>
                            <button type="button" className={styles.pillButton} aria-label="Clear search" onClick={() => {setSearch("");setSearchOpen(false);}}><X size={16}/></button>
                        </div>}
                        <TabGroup>
                            <TabList className={styles.filterTabs}>
                                {categories.map(([field, label, Icon]) => <Tab key={field} className={styles.filterTab}>
                                    <Icon size={15} aria-hidden="true"/><span>{label}</span>{filters[field]?.length > 0 && <span className={styles.tabCount}>{filters[field].length}</span>}
                                </Tab>)}
                            </TabList>
                            <TabPanels>
                                {categories.map(([field, label]) => <TabPanel key={field} className={styles.filterChoices}>
                                    {options[field].map(value => <button type="button" key={value} className={styles.choiceRow} aria-pressed={filters[field]?.includes(value) || false} onClick={() => toggle(field, value)}>
                                        <span>{value}</span>{filters[field]?.includes(value) && <Check size={16} aria-hidden="true"/>}
                                    </button>)}
                                    {options[field].length === 0 && <p className={styles.noChoices}>No {label.toLowerCase()} available.</p>}
                                </TabPanel>)}
                            </TabPanels>
                        </TabGroup>
                    </PopoverPanel>
                </Popover>
                <Popover className={styles.controlPopover}>
                    <PopoverButton className={styles.pillButton} aria-label="Sort photos" title="Sort photos" data-active={sort !== "date-desc" || undefined}><CurrentSortIcon size={18}/></PopoverButton>
                    <PopoverPanel className={`${styles.controlsPanel} ${styles.sortPanel}`}>
                        <div className={styles.panelHeading}><h2>Sort photos</h2></div>
                        <div className={styles.sortChoices}>
                            {sorts.map(([key, label, Icon]) => <button type="button" key={key} className={styles.choiceRow} aria-pressed={sort === key} onClick={() => setSort(key)}>
                                <Icon size={16} aria-hidden="true"/><span>{label}</span>{sort === key && <Check size={16} aria-hidden="true"/>}
                            </button>)}
                        </div>
                    </PopoverPanel>
                </Popover>
                <button type="button" className={styles.pillButton} aria-label={sort === "shuffle" ? "Shuffle again" : "Shuffle photos"} title="Shuffle photos" data-active={sort === "shuffle" || undefined} onClick={onShuffle}><Shuffle size={17}/></button>
            </PopoverGroup>
        </div>
    );
}
