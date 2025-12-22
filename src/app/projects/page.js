"use client";
import {projects} from "@/utils/profile_info";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className={'flex flex-col px-4 py-16 w-full h-full gap-15'}>
            
            <div className={'flex flex-col gap-1'}>
                <p className={"text-xl"}>{"Projects"}</p>
                <p className={"text-gray-400"}>
                    {"Some of my recent projects."}
                </p>
            </div>
            {
                projects.map((project, index) => {
                    return (
                        <Link href={project.navigation_link} key={index} className={"flex flex-col lg:flex-row gap-1 w-full"}>
                            <div className={"lg:w-2/4"}>
                                <Image src={project.image} className={"rounded-lg"} alt={project.title} width={500} height={500}/>
                            </div>
                            <div className={'flex flex-col cursor-pointer group w-full lg:justify-center'}>
                                <div className={'flex flex-col lg:flex-row lg:items-center lg:gap-5 cursor-pointer group w-full'}>
                                    <span className={'dotted-underline'}>
                                        {project.title}
                                    </span>
                                    <div className={"hidden lg:block grow border-[0.5px] border-gray-400/50"}>

                                    </div>
                                    <span className={'text-gray-400'}>
                                        {project.date}
                                    </span>
                                </div>
                                
                                <span className={'text-gray-400'}>
                                        {project.summary}
                                </span>
                                
                            </div>
                            
                        </Link>
                    )
                })
            }
            </div>
    )
}