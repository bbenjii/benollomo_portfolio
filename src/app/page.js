"use client";

import {ArrowRight, ArrowUpRight} from "lucide-react";

import Link from "next/link";


export default function Home() {


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


                </div>
            
        
    );
}