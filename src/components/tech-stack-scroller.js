import { useEffect, useMemo, useRef, useState } from "react";

export default function TechStackScroller({ tech_stack = [] }) {
    const viewportRef = useRef(null);
    const trackRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const dragState = useRef({ startX: 0, startScrollLeft: 0 });

    const items = useMemo(
        () => (Array.isArray(tech_stack) ? tech_stack : []),
        [tech_stack]
    );

    // Triplicate for "infinite" manual scroll
    const loopItems = useMemo(() => {
        if (!items.length) return [];
        return [...items, ...items, ...items];
    }, [items]);

    // Set initial scroll to the middle copy once we know widths
    useEffect(() => {
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) return;
        if (!items.length) return;

        // Wait a frame so layout is measured correctly
        requestAnimationFrame(() => {
            const copyWidth = track.scrollWidth / 3;
            viewport.scrollLeft = copyWidth; // start at middle copy
        });
    }, [items.length]);

    const normalizeScroll = () => {
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) return;
        if (!items.length) return;

        const copyWidth = track.scrollWidth / 3;
        const x = viewport.scrollLeft;

        // If we drift into the first copy, jump forward one copy
        if (x < copyWidth * 0.5) {
            viewport.scrollLeft = x + copyWidth;
            return;
        }

        // If we drift into the third copy, jump back one copy
        if (x > copyWidth * 1.5) {
            viewport.scrollLeft = x - copyWidth;
        }
    };

    const onPointerDown = (e) => {
        const el = viewportRef.current;
        if (!el) return;

        e.preventDefault();
        if (el.setPointerCapture) el.setPointerCapture(e.pointerId);

        setIsDragging(true);
        dragState.current.startX = e.clientX;
        dragState.current.startScrollLeft = el.scrollLeft;
    };

    const onPointerMove = (e) => {
        const el = viewportRef.current;
        if (!el || !isDragging) return;

        const dx = e.clientX - dragState.current.startX;
        el.scrollLeft = dragState.current.startScrollLeft - dx;
        normalizeScroll();
    };

    const endDrag = (e) => {
        const el = viewportRef.current;
        if (!el) return;

        try {
            if (el.releasePointerCapture) el.releasePointerCapture(e.pointerId);
        } catch (_) {}

        setIsDragging(false);
        normalizeScroll();
    };

    const onScroll = () => {
        if (isDragging) return; // already normalizing during drag
        normalizeScroll();
    };

    return (
        <div className="flex flex-col gap-5">
            <span className="text-sm text-gray-400">Tech Stack</span>

            <div
                ref={viewportRef}
                className={[
                    "relative overflow-x-auto overflow-y-hidden",
                    "select-none",
                    isDragging ? "cursor-grabbing" : "cursor-grab",
                ].join(" ")}
                style={{
                    WebkitOverflowScrolling: "touch",
                    touchAction: "pan-x",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
                onScroll={onScroll}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onPointerLeave={endDrag}
            >
                <div
                    ref={trackRef}
                    className="flex w-max gap-8 pr-8"
                    style={{
                        // Auto-scroll only when not dragging
                        animation: isDragging ? "none" : "techScroll 25s linear infinite",
                    }}
                >
                    {loopItems.map((tech, index) => (
                        <div
                            key={`${tech?.name || "tech"}-${index}`}
                            className="shrink-0 min-w-[90px] flex flex-col items-center gap-2 text-center"
                        >
                            <img
                                src={tech.icon}
                                width={32}
                                height={32}
                                alt={`${tech.name} logo`}
                                draggable={false}
                                style={{ userSelect: "none", WebkitUserDrag: "none" }}
                            />
                            <p className="text-sm text-white/70 whitespace-nowrap">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>

                <style>{`
          @keyframes techScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.3333%); } /* one copy out of three */
          }
          div::-webkit-scrollbar { display: none; }
        `}</style>
            </div>
        </div>
    );
}
