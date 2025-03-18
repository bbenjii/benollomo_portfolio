import Iframe from "react-iframe";

export default function Resume() {
    return (
        <div className="h-screen w-screen overflow-hidden flex">
            <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume"
                allowFullScreen
            />
        </div>
    )
}