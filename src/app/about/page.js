import {ArrowRight, ArrowUpRight} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    
    return (
        <div className={'flex flex-col px-4 py-16 w-full h-full gap-15'}>
            <div className={'flex flex-col lg:gap-5 gap-1'}>
                <p className="mb-5">
                    <span>Hey, I’m 👋 Benjamin. </span>

                    <Link
                        href="https://xpens.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 cursor-pointer group"
                    >
                        <span className="dotted-underline">
                            Currently a Software Engineer @ XPENS.AI
                        </span>
                        <ArrowUpRight
                            size={16}
                            className="mb-1 transition-transform duration-150 group-hover:translate-x-1/8 group-hover:-translate-y-1/8"
                        />
                    </Link>

                    <span>
                        {' '}
                        building scalable, intelligent financial software with a strong focus on reliability, performance, and clean user experiences.
                    </span>
                </p>
            </div>

            <div className={'flex flex-col gap-5'}>
                
            </div>


            </div>
    )
}