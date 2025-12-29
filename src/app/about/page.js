'use client';

import {ArrowUpRight, BadgeAlert, User} from "lucide-react";
import Link from "next/link";
import {useState} from "react";
import {info_translations, tech_stack} from "@/utils/profile_info";
import Image from "next/image";
import TechStackScroller from "@/components/tech-stack-scroller";

export default function AboutPage() {
    const [info, setInfo] = useState(info_translations.english);

    return (
        <div className={'flex flex-col px-4 py-16 w-full h-full gap-15'}>
            <div className={'flex flex-col lg:gap-5 gap-1'}>
                <p className="mb-5">
                    <span>{"Hey, I’m 👋 Ben."}</span>

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
                        {"My primary focus is building full-stack applications using React for the frontend, FastAPI and MongoDB for the backend, with Google Cloud Platform handling deployment and cloud infrastructure."}
                    </p>

                </div>

                {/* Beyond work */}
                <div className={'border rounded-lg p-5 bg-secondary-1'}>
                    <User size={20} className={'mb-2'}/>
                    <p>
                        {"Beyond work and programming, I enjoy:"}
                    </p>
                    <ul className={"list-inside list-disc "}>
                        <li className={''}>
                            {"Brazilian Jiu-Jitsu"}
                        </li>
                        <li>
                            {"Caliesthenics"}
                        </li>
                        <li>
                            {"Photography"}
                        </li>
                        <li>
                            {"Anime"}
                        </li>
                    </ul>

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
            <TechStackScroller tech_stack={tech_stack}/>

      



        </div>
    )
}