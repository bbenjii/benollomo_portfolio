import Iframe from "react-iframe";

export default function Resume() {
    return (
        <div className={"h-screen w-screen bg-white"}>
            <iframe
                src={"/benjamin_ollomo_resume.pdf"} width={"100%"} height={"100%"} title={"Resume"}
            />
        </div>
    )
}