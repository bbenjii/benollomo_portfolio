"use client";
import {useEffect, useRef, useState} from "react";
import {Switch} from "@headlessui/react";
import {ExternalLink} from "lucide-react";
import {Github, Linkedin, Mail, Phone, Globe} from 'lucide-react';

import Image from "next/image";
import Link from "next/link";
import CustomCursor from "../components/customCursor";
import ChatbotWidget from "../components/chatbotWidget";
import {headers_translations, info_translations} from "@/utils/profile_info";
import ExperienceComponent from "@/components/experienceComponent";

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
                        {/*<CustomCursor/>*/}
                    </div>
                    <div className={"z-50"}>
                        <ChatbotWidget/>
                    </div>
                    <div className="flex flex-col w-screen p-4 lg:min-w-200 lg:max-w-200 h-full mx-auto">
                        {/* Navigation Section */}
                        <div className="flex flex-col lg:py-10 lg:border-b border-white/60">
                            <div className="flex flex-col lg:w-full">
                                <span className="py-3 text-3xl font-bold ">{info.fullName}</span>
                                <span className="py-3 text-white/60">{info.headline}</span>

                            </div>
                            <div className={"flex gap-2 text-sm select-none"}>
                                <p onClick={() => setFrenchMode(false)}
                                   className={`cursor-pointer select-none ${frenchMode === true ? "text-white/60" : "text-white font-bold"}`}>English</p>
                                <Switch
                                    checked={frenchMode}
                                    onChange={setFrenchMode}
                                    className="group inline-flex hover:border hover:border-white/30 border border-white/0 h-6 w-11 cursor-pointer items-center rounded-full bg-primary-4/30  "
                                >
                                    <span
                                        className="size-4 translate-x-1 rounded-full bg-primary-1 transition group-data-[checked]:translate-x-6"/>
                                </Switch>
                                <p onClick={() => setFrenchMode(true)}
                                   className={`cursor-pointer ${frenchMode === true ? "text-white font-bold" : "text-white/60"} `}>Français</p>
                            </div>
                            <div className="flex mt-2 items-center w-full gap-10 select-none text-white/60">
                                <a href="https://github.com/bbenjii" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                                    <span className={"border-b pb-1"}>Github</span>
                                    {/*<Image src={"/github-logo.png"} width={28} height={28} alt="Github Logo"/>*/}
                                </a>
                                <a href="https://www.linkedin.com/in/benjaminollomo/" target="_blank"
                                   rel="noopener noreferrer">
                                    {/*<Image src={"/linkedin-logo.png"} width={28} height={28} alt="Linkedin Logo"/>*/}
                                    <span className={"border-b pb-1"}>Linkedin</span>

                                </a>
                                <a href="mailto:benji.ollomo@gmail.com" rel="noopener noreferrer">
                                    <span className={"border-b pb-1"}>Contact</span>
                                    {/*<Image src={"/mail-logo.png"} width={28} height={28} alt="Mail Logo"/>*/}
                                </a>
                            </div>
                        </div>

                        {/* Scrollable Content Container */}

                        <div
                            ref={containerRef}
                            className="flex flex-col gap-15 flex-nowrap lg:overflow-hidden lg:overflow-y-auto no-scrollbar no-scroll"
                            id="mainContainer"
                        >
                            <div className={""}>
                                <div className="flex flex-col relative" ref={experienceRef}>
                                    {/* Experience content */}
                                    <span
                                        className="py-3 sticky lg:static w-screen lg:h-0 top-0  bg-primary-1/80 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none text-xl lg:z-0 z-30">
                                {`${headers.experience}`}
                            </span>
                                    {
                                        info.experiences.map((experience, index) => {
                                            return (
                                                <div key={index}
                                                     className={"flex flex-col mt-3 lg:flex-row lg:p-4 group gap-4 rounded-xl"}>
                                                    <div className={"flex flex-col gap-3 text-white/60"}>
                                                        <div className={"flex justify-between"}><span
                                                            className={"font-bold text-white"}>{`${experience.title}`}
                                                        </span>
                                                            <span className={"text-sm text-white/60"}>
                                                                {experience.date}
                                                            </span>
                                                        </div>
                                                        <span className={" text-white/60"}>
                                                            {experience.company}
                                                        </span>
                                                        <span className={""}>
                                                            {experience.description}
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <Link href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
                            <span
                                className="flex group w-fit items-center gap-2 mt-4 lg:mt-0 lg:ml-10 text-lg cursor-pointer font-bold text-white hover:text-primary-4">
                                {headers.view_resume}
                                <ExternalLink className={"size-4 group-hover:size-5"}/>
                            </span>
                                    </Link>
                                </div>


                                <div className="flex flex-col relative gap-8 lg:gap-1" ref={projectsRef}
                                     id="projectSection">
                                    {/* Projects content */}
                                    <span
                                        className="py-3 sticky lg:static w-screen lg:h-0 top-0  bg-primary-1/80 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none text-xl lg:z-0 z-30">
                                {`${headers.projects}`}
                            </span>
                                    {
                                        info.projects.map((project, index) => {
                                            return (
                                                <div key={index}
                                                     className={"flex flex-col mt-3 lg:flex-row lg:p-4 group gap-4 rounded-xl"}>
                                                    <div
                                                        className={"flex flex-col order-1 lg:order-2 gap-3 text-white/60"}>
                                            <span
                                                className={"font-bold text-white"}>{`${project.title}`}</span>
                                                        <span className={""}>{project.description}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className="flex flex-col relative" ref={experienceRef}>
                                    {/* Experience content */}
                                    <span
                                        className="py-3 sticky lg:static w-screen lg:h-0 top-0  bg-primary-1/80 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none text-xl lg:z-0 z-30">
                                {`${headers.tech_stack}`}
                            </span>
                                    {["languages", "frontend", "backend", "databases", "cloudAndDevOps"].map((tech, index) => {
                                        return (<div key={index}
                                                     className={"flex flex-col mt-3 lg:px-4 lg:pt-2 group  rounded-xl"}>
                                            <div className={"flex flex-col text-white/60"}>
                                                       <span className={""}>
                                                                   {headers[tech]}
                                                       </span>
                                                <div className={"flex gap-2 flex-wrap lg:flex-nowrap"}>
                                                    {info.tech_stack[tech].map((technology, index) => {
                                                        return (<div
                                                                key={`experience-${index}`}
                                                                className="backdrop-blur-sm bg-white/10 text-white/80 border border-white/20 p-2 rounded-2xl text-xs"
                                                            >
                                                                {technology}
                                                            </div>

                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>)
                                    })}


                                </div>

                            {/*    <div className="flex flex-col relative" ref={interestsRef}>*/}
                            {/*<span*/}
                            {/*    className="py-3 sticky w-screen lg:h-0 lg:collapse top-0 bg-primary-1/80 backdrop-blur-lg text-xl lg:font-bold">*/}
                            {/*    {`${headers.interests}`}*/}
                            {/*</span>*/}
                            {/*        /!* Interests content *!/*/}
                            
                            {/*    </div>*/}
                            </div>


                        </div>
                    </div>
                </>}
        </div>
    );
}