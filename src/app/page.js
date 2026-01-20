"use client";

import {ArrowRight, ArrowUpRight, BadgeAlert, ChevronRight} from "lucide-react";
import {info_translations, projects, tech_stack} from "@/utils/profile_info";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useChatbot} from "@/components/chatbotProvider";
import TechStackScroller from "@/components/tech-stack-scroller";


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

        <div className={'flex flex-col px-4 py-16 w-full h-full gap-15'}>

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
                    <p className="mb-5">
                        <span>{"Hey 👋🏾, I’m Ben."}</span>

                        <Link
                            href="https://xpens.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 cursor-pointer group"
                        >
                        <span className="ml-1 dotted-underline">
                            {" Currently a Software Developer @ XPENS.AI"}
                        </span>
                            <ArrowUpRight
                                size={16}
                                className="mb-1 transition-transform duration-150 group-hover:translate-x-1/8 group-hover:-translate-y-1/8"
                            />
                        </Link>

                        <span>
                        {' '}
                            {"building scalable, intelligent financial software for law firms"}
                    </span>
                    </p>
                    {/* Key area of work */}
                    <div className={'border rounded-lg p-5 mb-5 bg-secondary-1'}>
                        <BadgeAlert size={20} className={'mb-2'}/>
                        <p>
                            {"My core expertise lies in full-stack development, specializing in React for the frontend, FastAPI and MongoDB for backend systems, and Google Cloud Platform for deployment and infrastructure."}
                        </p>

                    </div>

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
                    
                    <span className={'text-sm text-gray-400'}>
                        {"CONNECT WITH ME"}
                    </span>

                    <div className={'flex flex-col lg:flex-row gap-1 lg:gap-5'}>
                        {/* Email */}
                        <a className={'flex cursor-pointer items-center group gap-1'} href="mailto:benji.ollomo@gmail.com" rel="noopener noreferrer">
                            <p className={'dotted-underline '}>
                                {"Email"}
                            </p>
                            <ArrowUpRight size={16} className={"mb-1 group-hover:translate-x-1/8 group-hover:-translate-y-1/8 transition-transform duration-150"}/>
                        </a>

                        {/* LinkedIn */}
                        <a className={'flex cursor-pointer items-center group gap-1'} href="https://www.linkedin.com/in/benjaminollomo/" target="_blank" rel="noopener noreferrer">
                            <p className={'dotted-underline '}>
                                {"LinkedIn"}
                            </p>
                            <ArrowUpRight size={16} className={"mb-1 group-hover:translate-x-1/8 group-hover:-translate-y-1/8 transition-transform duration-150"}/>
                        </a>

                        {/* Github */}
                        <a className={'flex cursor-pointer items-center group gap-1'} href="https://github.com/bbenjii" target="_blank" rel="noopener noreferrer">
                            <p className={'dotted-underline '}>
                                {"Github"}
                            </p>
                            <ArrowUpRight size={16} className={"mb-1 group-hover:translate-x-1/8 group-hover:-translate-y-1/8 transition-transform duration-150"}/>
                        </a>
                    </div>
                </div>

            <div className={'flex flex-col gap-5'}>
                <span className={'text-sm text-gray-400'}>
                        {"EXPERIENCE"}
                    </span>
                {
                    info.experiences.map((experience, index) => {
                        return (
                            <div key={index} className={"flex flex-col gap-1"}>
                                <p>
                                    <Link
                                        href="https://xpens.ai/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 cursor-pointer group"
                                    >
                                    <span className="dotted-underline">
                                        {`${experience.title} at ${experience.company}`}
                                    </span>
                                        <ArrowUpRight
                                            size={16}
                                            className="mb-1 transition-transform duration-150 group-hover:translate-x-1/8 group-hover:-translate-y-1/8"
                                        />
                                    </Link>
                                </p>
                                <p className={"text-sm "}>
                                    ({experience.date})
                                </p>
                                <ul className="text-sm text-white/60 list-disc list-inside marker:text-white/60 mt-3 space-y-1">
                                    <li>Full-stack development using React, FastAPI, MongoDB, and Google Cloud</li>
                                    <li>AI-powered automation for invoice processing</li>
                                    <li>Scalable backend services and APIs</li>
                                    <li>UI improvements and reliable cloud deployments</li>
                                </ul>
                            </div>
                        )
                    })
                }

            </div>
            
            {/* Projects */}
            <div className={'flex flex-col gap-5'}>
                <div className={"flex justify-between items-center "}>
                    <span className={'text-sm text-gray-400'}>
                        {"PROJECTS"}
                    </span>
                    <Link href={'/projects'}>
                        <ChevronRight color={"gray"} size={20} className={"hover:bg-gray-400/50 rounded-full transition-colors duration-150 cursor-pointer"}/>

                    </Link>
                </div>
                {
                    projects.map((project, index) => {
                        return (
                            <div key={index} className={"flex mb-2"}>
                                <Link href={project.navigation_link} className={'flex flex-col lg:flex-row lg:items-center lg:gap-5 cursor-pointer group w-full'}>
                                    <span className={'dotted-underline'}>
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
                                    
                                </Link>
                            </div>
                        )
                    })
                }

            </div>

            <TechStackScroller tech_stack={tech_stack}/>

            

            <div className={'flex flex-col gap-5'}>
                <span className={'text-sm text-gray-400'}>
                        {"EDUCATION"}
                </span>
                {
                    info.education.map((education, index) => {
                        return (
                            <div key={index} className={"flex flex-col gap-1"}>
                                <p>
                                    <Link
                                        href="https://www.concordia.ca/academics/undergraduate/computer-engineering.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 cursor-pointer group"
                                    >
                                    <span className="dotted-underline">
                                        {`${education.program} at ${education.institution}`}
                                    </span>
                                        <ArrowUpRight
                                            size={16}
                                            className="mb-1 transition-transform duration-150 group-hover:translate-x-1/8 group-hover:-translate-y-1/8"
                                        />
                                    </Link>
                                </p>
                                <p className={"text-sm "}>
                                    {education.date}
                                </p>
                                <p className={"text-sm text-gray-400"}>
                                    {education.location}
                                </p>
                            </div>
                        )
                    })
                }
            </div>


                </div>
            
        
    );
}