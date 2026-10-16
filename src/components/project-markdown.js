import ReactMarkdown from "react-markdown";
import ProjectMedia from "./project-media";

export default function ProjectMarkdown({content}) {
    return (
        <div className="prose prose-invert max-w-none prose-p:leading-8 prose-a:break-words">
            <ReactMarkdown components={{
                p({node, children}) {
                    const media = node.children.filter((child) => child.tagName === "img");
                    const onlyMedia = node.children.every((child) => child.tagName === "img" ||
                        (child.type === "text" && !child.value.trim()));
                    if (media.length && onlyMedia) {
                        return <ProjectMedia items={media.map(({properties}) => ({
                            src: properties.src, alt: properties.alt,
                        }))}/>;
                    }
                    return <p>{children}</p>;
                },
                img({src, alt}) {
                    // Inline media remains valid inside Markdown paragraphs.
                    return /\.mp4$/i.test(src) ?
                        <video src={src} controls playsInline preload="metadata" aria-label={alt}/> :
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={src} alt={alt} loading="lazy"/>;
                },
            }}>{content}</ReactMarkdown>
        </div>
    );
}
