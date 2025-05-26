"use client";
import {useEffect, useRef, useState} from "react";
import {Switch} from "@headlessui/react";
import {ExternalLink} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CustomCursor from "../components/customCursor";
import ChatbotWidget from "../components/chatbotWidget";
import {headers_translations, info_translations} from "@/utils/profile_info";

export default function Home() {
    const [frenchMode, setFrenchMode] = useState(false);
    const [info, setInfo] = useState(info_translations.english);
    const [headers, setHeaders] = useState(headers_translations.english);
    const [activeSection, setActiveSection] = useState("");
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const interestsRef = useRef(null);

    // On mount: read from localStorage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const preferredLang = localStorage.getItem("preferred_language");
            setFrenchMode(preferredLang === "fr");
        }
        setLoading(false)

    }, []);

    // On frenchMode change: update content + localStorage
    useEffect(() => {
        if (frenchMode) {
            setInfo(info_translations.french);
            setHeaders(headers_translations.french);
            localStorage.setItem("preferred_language", "fr");
        } else {
            setInfo(info_translations.english);
            setHeaders(headers_translations.english);
            localStorage.setItem("preferred_language", "en");
        }
    }, [frenchMode]);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const containerTop = containerRef.current.getBoundingClientRect().top;
        let closestSection = "";
        let minDistance = Infinity;

        const sections = [
            {name: "about", ref: aboutRef},
            {name: "experience", ref: experienceRef},
            {name: "projects", ref: projectsRef},
            {name: "interests", ref: interestsRef},
        ];

        sections.forEach((section) => {
            if (section.ref.current) {
                const distance = Math.abs(
                    section.ref.current.getBoundingClientRect().top - containerTop
                );
                if (distance < minDistance) {
                    minDistance = distance;
                    closestSection = section.name;
                }
            }
        });

        setActiveSection(closestSection);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

    // Everything else remains the same...

    return (
        <div className="h-screen w-screen overscroll-none flex m-0 ">
            {
                !loading && <>
            <div className={"collapse lg:visible"}>
                <CustomCursor/>
            </div>
            <div className={"z-50"}>
                <ChatbotWidget/>
            </div>
            <div className="flex flex-col w-screen lg:flex-row lg:min-w-250 lg:max-w-300 h-full mx-auto">
                {/* Navigation Section */}
                <div className="p-4 flex flex-col  lg:w-3/7 lg: lg:justify-between lg:py-30 ">
                    <div className="flex flex-col lg:w-full">
                        <span className="py-3 text-3xl lg:text-5xl font-bold lg:font-extrabold ">{info.fullName}</span>
                        <span className="py-3 text-xl lg:font-bold">{info.title}</span>
                        <span className="py-3 lg:w-100 text-white/60">{info.headline}</span>
                        <div className="flex flex-col w-full lg:mt-10 h-0 collapse lg:h-full lg:visible">
                            <div className="flex group h-15 w-fit items-center cursor-pointer"
                                 onClick={() => scrollToSection(aboutRef)}>
                                <span
                                    className={`nav-indicator mx-3 border group-hover:w-12 group-hover:border-white border-solid ${activeSection === "about" ? "w-12" : "border-white/60 w-8"}`}/>
                                <span
                                    className={`mx-3 group-hover:text-white ${activeSection === "about" ? "" : "text-white/60"}`}>
                                    {headers.about}
                                </span>
                            </div>
                            <div className="flex group h-15 w-fit items-center cursor-pointer"
                                 onClick={() => scrollToSection(experienceRef)}>
                                <span
                                    className={`nav-indicator mx-3 border group-hover:w-12 group-hover:border-white border-solid ${activeSection === "experience" ? "w-12" : "border-white/60 w-8"}`}/>
                                <span
                                    className={`mx-3 group-hover:text-white ${activeSection === "experience" ? "" : "text-white/60"}`}>
                                    {headers.experience}
                                </span>
                            </div>
                            <div className="flex group h-15 w-fit items-center cursor-pointer"
                                 onClick={() => scrollToSection(projectsRef)}>
                                <span
                                    className={`nav-indicator mx-3 border group-hover:w-12 group-hover:border-white border-solid ${activeSection === "projects" ? "w-12" : "border-white/60 w-8"}`}/>
                                <span
                                    className={`mx-3 group-hover:text-white ${activeSection === "projects" ? "" : "text-white/60"}`}>
                                    {headers.projects}
                                </span>
                            </div>
                            <div className="flex group h-15 w-fit items-center cursor-pointer"
                                 onClick={() => scrollToSection(interestsRef)}>
                                <span
                                    className={`nav-indicator mx-3 border group-hover:w-12 group-hover:border-white border-solid ${activeSection === "interests" ? "w-12" : "border-white/60 w-8"}`}/>
                                <span
                                    className={`mx-3 group-hover:text-white ${activeSection === "interests" ? "" : "text-white/60"}`}>
                                    {headers.interests}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={"flex lg:my-5 gap-2 lg:h-20 text-sm select-none"}>
                        <p onClick={()=>setFrenchMode(false)} className={`cursor-pointer select-none ${frenchMode === true ? "text-white/60" : "text-white font-bold"}`}>English</p>
                        <Switch
                            checked={frenchMode}
                            onChange={setFrenchMode}
                            className="group inline-flex hover:border hover:border-white/30 border border-white/0 h-6 w-11 cursor-pointer items-center rounded-full bg-primary-4/30  "
                        >
                            <span className="size-4 translate-x-1 rounded-full bg-primary-1 transition group-data-[checked]:translate-x-6" />
                        </Switch>
                        <p onClick={()=>setFrenchMode(true)} className={`cursor-pointer ${frenchMode === true ? "text-white font-bold" : "text-white/60"} `}>Français</p>
                    </div>
                    <div className="flex mt-4 lg:m-0 lg:h-20 items-center w-full gap-10 select-none">
                        <a href="https://github.com/bbenjii" target="_blank" rel="noopener noreferrer">
                            <Image src={"/github-logo.png"} width={28} height={28} alt="Github Logo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/benjaminollomo/" target="_blank" rel="noopener noreferrer">
                            <Image src={"/linkedin-logo.png"} width={28} height={28} alt="Linkedin Logo"/>
                        </a>
                        <a href="mailto:benji.ollomo@gmail.com" rel="noopener noreferrer">
                            <Image src={"/mail-logo.png"} width={28} height={28} alt="Mail Logo"/>
                        </a>
                    </div>

                </div>

                {/* Scrollable Content Container */}

                <div
                    ref={containerRef}
                    className="flex flex-col lg:w-4/7 lg:py-30 gap-10 lg:gap-30 flex-nowrap lg:overflow-hidden lg:overflow-y-auto no-scrollbar no-scroll"
                    id="mainContainer"
                >


                    <div className={"p-4"}>
                        <div className="flex flex-col relative" ref={aboutRef}>
                            <span
                                className="py-3 sticky w-screen lg:h-0 lg:collapse top-0 bg-primary-1/80 backdrop-blur-lg text-xl lg:font-bold">
                                {`${headers.about}`}
                            </span>
                            <p className="whitespace-pre-wrap text-white/60">
                                {info.bio}
                            </p>
                        </div>
                        <div className="flex flex-col relative" ref={experienceRef}>
                            {/* Experience content */}
                            <span
                                className="py-3 sticky w-screen lg:h-0 lg:collapse top-0 bg-primary-1/80 backdrop-blur-lg text-xl lg:font-bold z-30">
                                {`${headers.experience}`}
                            </span>
                            {
                                info.experiences.map((experience, index) => {
                                    return (
                                        <div key={index}
                                             className={"flex flex-col lg:flex-row lg:p-4 group gap-4 rounded-xl hover:shadow-lg border border-primary-1/0 hover:border-white/5 shadow-primary-2/30 hover:bg-primary-2/30  "}>
                                            <div className={"lg:w-1/3 text-sm text-white/60"}>
                                            <span>
                                                {experience.date}
                                            </span>
                                            </div>
                                            <div className={"flex flex-col gap-4 lg:w-2/3 text-white/60"}>
                                            <span
                                                className={"font-bold text-white group-hover:text-primary-4"}>{`${experience.title}, ${experience.company}`}</span>
                                                <span className={""}>{experience.description}</span>
                                                <div className={"flex gap-4 flex-wrap lg:flex-nowrap"}>
                                                    {experience.technology.map((technology, index) => {
                                                        return (
                                                            <div key={`experience-${index}`}
                                                                 className={"bg-primary-4/20 text-primary-4 p-2 rounded-2xl text-xs"}>
                                                                {technology}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <Link href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
                            <span
                                className="flex group w-fit items-center gap-2 mt-4 lg:mt-0 lg:ml-10 text-lg font-bold cursor-pointer font-bold text-white hover:text-primary-4">
                                {headers.view_resume}
                                <ExternalLink className={"size-4 group-hover:size-5"}/>
                            </span>
                            </Link>

                        </div>
                        <div className="flex flex-col relative gap-8 lg:gap-1" ref={projectsRef} id="projectSection">
                            {/* Projects content */}
                            <span
                                className="py-3 sticky w-screen lg:h-0 lg:collapse top-0 bg-primary-1/80 backdrop-blur-lg text-xl lg:font-bold">
                                {`${headers.projects}`}
                            </span>
                            {
                                info.projects.map((project, index) => {
                                    return (
                                        <div key={index}
                                             className={"flex flex-col lg:flex-row lg:p-4 group gap-4 rounded-xl hover:shadow-lg border border-primary-1/0 hover:border-white/5 shadow-primary-2/30 hover:bg-primary-2/30  "}>
                                            <div className={"lg:w-1/3 order-2 lg:order-1 text-sm text-white/60 content-center"}>
                                            <span>
                                                {project?.images?.map((image, index) =>
                                                    {
                                                        return (
                                                            <div className={""} key={index}>
                                                            <Image className={"rounded-3xl"} src={image} alt={"image"} width={200} height={1}  />
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </span>
                                            </div>
                                            <div
                                                className={"flex flex-col order-1 lg:order-2 gap-4 lg:w-2/3 text-white/60"}>
                                            <span
                                                className={"font-bold text-white group-hover:text-primary-4"}>{`${project.title}`}</span>
                                                <span className={""}>{project.description}</span>
                                                <div className={"flex gap-4 flex-wrap "}>
                                                    {project.technology.map((technology, index) => {
                                                        return (
                                                            <div key={`project-${index}`}
                                                                 className={"bg-primary-4/20 text-primary-4 p-2 rounded-2xl text-xs"}>
                                                                {technology}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col relative" ref={interestsRef}>
                            <span
                                className="py-3 sticky w-screen lg:h-0 lg:collapse top-0 bg-primary-1/80 backdrop-blur-lg text-xl lg:font-bold">
                                {`${headers.interests}`}
                            </span>
                            {/* Interests content */}

                        </div>
                    </div>


                </div>
            </div>
                </>}
        </div>
    );
}