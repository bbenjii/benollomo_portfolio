import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <div
            className="spotlight-cursor"
            style={{
                background: `radial-gradient(
          circle 700px at ${position.x}px ${position.y}px,
          rgba(125, 211, 252, 0.12) 0%,
          rgba(125, 211, 252, 0.06) 10%,
          rgba(0, 0, 0, 0) 100%
        )`,
            }}
        />
    );
}
