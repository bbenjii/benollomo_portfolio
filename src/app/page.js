"use client";

import {ArrowRight, ArrowUpRight, ChevronRight} from "lucide-react";
import {projects} from "@/utils/profile_info";
import Link from "next/link";
import {useEffect} from "react";


export default function Home() {

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
                    <span className={"mb-5"}>
                        {"Developer.Tech enthusiast. Into fitness, martial arts, and photography."}
                    </span>
                    <Link href={'/about'} className={'flex cursor-pointer items-center group gap-1'}>
                        <p className={'dotted-underline '}>
                            {"Learn more about me"}
                        </p>
                        <p>
                            {'🧑🏾‍💻'}
                        </p>
                        <ArrowRight size={16} className={"group-hover:translate-x-1/8 transition-transform duration-150"}/>
                    </Link>

                    <Link href={'/'} className={'flex cursor-pointer items-center group gap-1'}>
                        <p className={'dotted-underline '}>
                            {"What I'm up to now"}
                        </p>
                        <p>
                            {"🔧"}
                        </p>
                        <ArrowRight size={16} className={"group-hover:translate-x-1/8 transition-transform duration-150"}/>
                    </Link>
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
                                <Link href={"/"} className={'flex flex-col lg:flex-row lg:items-center lg:gap-5 cursor-pointer group w-full'}>
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


                </div>
            
        
    );
}