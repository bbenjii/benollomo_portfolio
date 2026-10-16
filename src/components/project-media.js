"use client";

import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

export default function ProjectMedia({items}) {
    const [index, setIndex] = useState(0);
    const item = items[index];
    const carousel = items.length > 1;

    return (
        <section className="not-prose my-8 min-w-0 overflow-hidden rounded-xl border border-white/10 bg-secondary-1"
                 aria-label={carousel ? "Project images" : "Project media"}
                 aria-roledescription={carousel ? "carousel" : undefined}>
            <div className="flex min-h-0 items-center justify-center p-2 sm:p-4">
                {/\.mp4$/i.test(item.src) ? (
                    <video key={item.src} src={item.src} controls playsInline preload="metadata"
                           aria-label={item.alt} className="max-h-[75vh] w-full rounded-lg"/>
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.src} alt={item.alt} loading="lazy"
                         className="max-h-[75vh] w-full rounded-lg object-contain"/>
                )}
            </div>
            {carousel && (
                <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                    <button type="button" aria-label="Previous image"
                            onClick={() => setIndex((index + items.length - 1) % items.length)}
                            className="rounded-lg p-3 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-sky-300">
                        <ChevronLeft size={20}/>
                    </button>
                    <span className="text-sm text-white/60" aria-live="polite" aria-atomic="true">
                        {index + 1} / {items.length}
                    </span>
                    <button type="button" aria-label="Next image"
                            onClick={() => setIndex((index + 1) % items.length)}
                            className="rounded-lg p-3 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-sky-300">
                        <ChevronRight size={20}/>
                    </button>
                </div>
            )}
        </section>
    );
}
