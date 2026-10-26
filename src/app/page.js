"use client";

import {ArrowRight, ArrowUpRight, BrainCircuit, ChevronRight, CloudCog, Landmark} from "lucide-react";
import Image from "next/image";
import {info_translations, visibleProjects, tech_stack} from "@/utils/profile_info";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useChatbot} from "@/components/chatbotProvider";
import TechStackGrid from "@/components/tech-stack-grid";


export default function Home() {
    const {sendChatbotMessage} = useChatbot();
    const [info, setInfo] = useState(info_translations.english);

    useEffect(() => {

        // fetchSpotifyData().then(res => console.log(res));
    }, [])

    async function fetchSpotifyData() {
        const url = '/api/spotify';

        const response = await fetch(url, {method: "GET"});
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        console.log(data);
        return data
    }
    return (

        <div className={'flex flex-col px-4 py-16 w-full h-full gap-10'}>

                {/* About me section*/}
                <div className={'flex flex-col lg:gap-5 gap-1'}>
                    {/*<p className="mb-5 whitespace-nowrap">*/}
                    {/*    {"Tech, Fitness, and "}*/}
                    {/*    <a*/}
                    {/*        href={"https://en.wikipedia.org/wiki/One_Piece"}*/}
                    {/*        target="_blank" rel="noopener noreferrer"*/}
                    {/*        className="inline-flex cursor-pointer items-center group gap-1 align-baseline"*/}
                    {/*    >*/}
                    {/*        <span className={'dotted-underline '}>*/}
                    {/*        {"One Piece"}*/}
                    {/*    </span>*/}
                    {/*    </a>*/}
                    {/*    {" enthusiast"}*/}
                    {/*</p>*/}
                    <div className="space-y-4 text-gray-400">
                        <p>i&apos;m Ben 🧑🏾‍💻</p>
                        <p>
                            a software developer at{" "}
                            <Link href="https://xpens.ai/" target="_blank" rel="noopener noreferrer" className="dotted-underline text-white">
                                xpens.ai
                            </Link>
                            {", where i build financial software for law firms."}
                        </p>
                        <p>
                            also building{" "}
                            <Link href="https://nora-fi.com" target="_blank" rel="noopener noreferrer" className="dotted-underline text-white">
                                nora
                            </Link>
                            {", helping people understand their finances."}
                        </p>
                        <p>
                            and{" "}
                            <Link href="https://getreelly.com" target="_blank" rel="noopener noreferrer" className="dotted-underline text-white">
                                reelly
                            </Link>
                            {", bringing people’s saved social media posts together in one place."}
                        </p>
                        <p>
                            i take{" "}
                            <Link href="/pics" className="dotted-underline text-white">
                                pics
                            </Link>
                            {" sometimes when i remember to"}
                        </p>
                    </div>
                    {/* What I build */}
                    {/*<div className={'border rounded-lg p-5 mb-5 bg-secondary-1'}>*/}
                    {/*    <p className="text-lg leading-relaxed max-w-2xl">*/}
                    {/*        Full-stack product engineer building AI-assisted financial systems, internal workflows, and production web applications.*/}
                    {/*    </p>*/}
                    
                    {/*    <div className="grid gap-5 mt-6 lg:grid-cols-3">*/}
                    {/*        <div className="flex flex-col gap-2">*/}
                    {/*            <Landmark size={20} aria-hidden="true"/>*/}
                    {/*            <p className="font-medium">Financial software and transaction systems</p>*/}
                    {/*            <p className="text-sm text-white/60">*/}
                    {/*                Designing reliable workflows for financial data, reconciliation, invoices, expenses, and reporting.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    
                    {/*        <div className="flex flex-col gap-2">*/}
                    {/*            <BrainCircuit size={20} aria-hidden="true"/>*/}
                    {/*            <p className="font-medium">AI-assisted products and structured automation</p>*/}
                    {/*            <p className="text-sm text-white/60">*/}
                    {/*                Turning complex documents and business processes into reviewable, evidence-backed product experiences.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    
                    {/*        <div className="flex flex-col gap-2">*/}
                    {/*            <CloudCog size={20} aria-hidden="true"/>*/}
                    {/*            <p className="font-medium">Production web platforms and cloud infrastructure</p>*/}
                    {/*            <p className="text-sm text-white/60">*/}
                    {/*                Shipping full-stack applications from user interface and APIs through deployment, operations, and maintenance.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<Link href={'/about'} className={'flex cursor-pointer items-center group gap-1'}>*/}
                    {/*    <p className={'dotted-underline '}>*/}
                    {/*        {"Learn more about me"}*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        {'🧑🏾‍💻'}*/}
                    {/*    </p>*/}
                    {/*    <ArrowRight size={16} className={"group-hover:translate-x-1/8 transition-transform duration-150"}/>*/}
                    {/*</Link>*/}
                    
                    {/*<Link href={'/'} className={'flex cursor-pointer items-center group gap-1'}>*/}
                    {/*    <p className={'dotted-underline '}>*/}
                    {/*        {"What I'm up to now"}*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        {"🔧"}*/}
                    {/*    </p>*/}
                    {/*    <ArrowRight size={16} className={"group-hover:translate-x-1/8 transition-transform duration-150"}/>*/}
                    {/*</Link>*/}
                </div>


                {/* Connect with Me*/}
                <div className={'flex flex-col gap-5'}>
                    
                    {/*<span className={'text-sm text-gray-400'}>*/}
                    {/*    {"CONNECT WITH ME"}*/}
                    {/*</span>*/}

                    <div className={'flex flex-row gap-5'}>
                        {/* Email */}
                        <a className="flex cursor-pointer items-center" href="mailto:benji.ollomo@gmail.com" aria-label="Email">
                            <Image src="/mail-logo.png" alt="" width={18} height={18} className="opacity-60 transition-opacity hover:opacity-100" />
                        </a>

                        {/* LinkedIn */}
                        <a className="flex cursor-pointer items-center" href="https://www.linkedin.com/in/benjaminollomo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Image src="/linkedin-logo.png" alt="" width={18} height={18} className="opacity-60 transition-opacity hover:opacity-100" />
                        </a>

                        {/* Github */}
                        <a className="flex cursor-pointer items-center" href="https://github.com/bbenjii" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Image src="/github-logo.png" alt="" width={18} height={18} className="opacity-60 transition-opacity hover:opacity-100" />
                        </a>
                    </div>
                </div>

            <div className={'flex flex-col gap-5 lowercase'}>
                <span className={'text-sm font-bold text-sky-300 uppercase'}>
                        {"EXPERIENCE"}
                    </span>
                {
                    info.experiences.map((experience, index) => {
                        return (
                            <div key={index} className="flex items-center gap-3">
                                <Image
                                    src={experience.company === "XPENS.AI" ? "/xpens-logo.svg" : "/nasan-logo.svg"}
                                    alt={`${experience.company} logo`}
                                    width={28}
                                    height={28}
                                    className="size-7 shrink-0 object-contain"
                                />
                                <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-3 gap-y-1 text-base">
                                    <Link href={experience.link} target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:dotted-underline">
                                        {experience.company}
                                    </Link>
                                    <span className="text-gray-400">- {experience.title}</span>
                                    {/*<span className="ml-auto text-gray-500">{experience.date}</span>*/}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            
            {/* Projects */}
            <div className={'flex flex-col gap-5'}>
                <div className={"flex justify-between items-center "}>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-sky-300">PROJECTS</span>
                        <p className="text-sm text-gray-400">short stories about things i’ve built</p>
                    </div>
                    <Link href={'/projects'}>
                        <ChevronRight color={"gray"} size={20} className={"hover:bg-gray-400/50 rounded-full transition-colors duration-150 cursor-pointer"}/>

                    </Link>
                </div>
                {
                    visibleProjects.map((project, index) => {
                        return (
                            <div key={index} className={"flex mb-2"}>
                                <Link href={project.navigation_link} className="flex items-center gap-3 cursor-pointer group w-full lowercase">
                                    <Image src={project.icon} alt="" width={28} height={28}
                                           className="size-7 shrink-0 object-contain"/>
                                    <div className="flex min-w-0 flex-1 flex-col lg:flex-row lg:items-center lg:gap-5">
                                    <span>
                                        {project.title}
                                    </span>
                                    <span className={'text-gray-400'}>
                                        {project.summary}
                                    </span>
                                    <div className={"hidden lg:block grow border-[0.5px] border-gray-400/10"}>
                                        
                                    </div>
                                    <span className={'text-gray-400'}>
                                        {project.date}
                                    </span>
                                    
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>

            <TechStackGrid tech_stack={tech_stack}/>

            

            <div className={'flex flex-col gap-5'}>
                <span className={'text-sm font-bold text-sky-300'}>
                        {"EDUCATION"}
                </span>
                {
                    info.education.map((education, index) => {
                        return (
                            <div key={index} className="flex items-center gap-3 lowercase">
                                <Image src="/concordia-logo.png" alt="Concordia University logo"
                                       width={28} height={28} className="size-7 shrink-0 object-contain"/>
                                <div className="flex min-w-0 flex-col gap-1">
                                <p>
                                    <Link
                                        href="https://www.concordia.ca/academics/undergraduate/computer-engineering.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 cursor-pointer group"
                                    >
                                    <span>
                                        {`${education.program} at ${education.institution}`}
                                    </span>
                                        <ArrowUpRight
                                            size={16}
                                            className="mb-1 transition-transform duration-150 group-hover:translate-x-1/8 group-hover:-translate-y-1/8"
                                        />
                                    </Link>
                                </p>
                                {/*<p className={"text-sm "}>*/}
                                {/*    {education.date}*/}
                                {/*</p>*/}
                                <p className={"text-sm text-gray-400"}>
                                    {education.location}
                                </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


                </div>
            
        
    );
}
