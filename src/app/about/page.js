'use client';

import {ArrowUpRight} from "lucide-react";
import Link from "next/link";
import {useState} from "react";
import {info_translations} from "@/utils/profile_info";

export default function AboutPage() {
    const [info, setInfo] = useState(info_translations.english);

    return (
        <div className={'flex flex-col px-4 py-16 w-full h-full gap-15'}>
            <div className={'flex flex-col lg:gap-5 gap-1'}>
                <p className="mb-5">
                    <span>{"Hey, I’m 👋 Benjamin."}</span>

                    <Link
                        href="https://xpens.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 cursor-pointer group"
                    >
                        <span className="dotted-underline">
                            {"Currently a Software Engineer @ XPENS.AI"}
                        </span>
                        <ArrowUpRight
                            size={16}
                            className="mb-1 transition-transform duration-150 group-hover:translate-x-1/8 group-hover:-translate-y-1/8"
                        />
                    </Link>

                    <span>
                        {' '}
                        {"building scalable, intelligent financial software with a strong focus on reliability, performance, and clean user experiences."}
                    </span>
                </p>
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


            </div>
    )
}