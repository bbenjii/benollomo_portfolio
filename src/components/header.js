'use client';

import {usePathname, useSearchParams} from 'next/navigation';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {ExternalLink, ArrowRight, ArrowUpRight, CornerLeftUp, CornerUpLeft} from "lucide-react";

import {useEffect, useState} from "react";

export default function Header({}) {
    const currentPath = usePathname(); // e.g., '/dashboard/settings'
    const [navigation, setNavigation] = useState([])
    const [subpaths, setSubpaths] = useState([])
    useEffect(() => {
        const pathNames = (currentPath.split('/')).filter(p => p)
        let updatedSubpaths = []
        pathNames.forEach((subpath, index) => {
            const nav = {name: subpath}
            let link = '/'
            for (let i = 0; i <= index; i++) {
                link += `${pathNames[i]}/`
            }
            nav.link = link
            updatedSubpaths.push(nav)

        })

        setSubpaths(updatedSubpaths)
    }, [currentPath])

    const showBack = currentPath !== '/';

    function Separator() {
        return (
            <span className={'text-gray-400'}>/</span>
        )
    }
    
    function BackButton() {
        return (
            <div>
                <CornerUpLeft color={"gray"} size={16}/>
            </div>
        )
    }
    function OnlineIndicator() {
        return (
            <div
                role="img"
                aria-label="Online status indicator"
                className="relative flex size-2.5"
            >
                <span
                    className="absolute inline-flex h-full w-full animate-[ping_3s_ease-in-out_infinite] rounded-full bg-emerald-500 opacity-75"/>
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"/>
            </div>
        );
    };
    return (
        <div className={'flex px-4 gap-2 items-center w-full'}>
            {
                currentPath !== '/' && 
                <BackButton/>
            }
            <OnlineIndicator/>
            <Link href="/" className={`animate-[slideInRight_800ms_ease-out_forwards] ${subpaths.length > 0 ? 'text-gray-400' : 'text-white'}`}>
                Ben Ollomo
            </Link>
            <Separator />

            {currentPath === '/' && (
                <div className="flex gap-2 ">
                    <span className="text-gray-400 animate-[slideInLeft_300ms_ease-out_forwards]" >
                        Software Engineer
                    </span>
                </div>
            )}



            {
                    subpaths.map((subpath, index) => {
                        return (
                            <div key={index} className={`flex gap-2 animate-[slideInUp_300ms_ease-out_forwards]`} style={{ animationDelay: `${index * 100}ms` }} >
                                {index !== 0 && <Separator/>}
                                <Link
                                    href={subpath.link}
                                    className={index === subpaths.length - 1 ? 'text-white' : 'text-gray-400'}
                                >
                                    {subpath.name}
                                </Link>
                            </div>
                            
                            )
                        
                    })
            }
            <span className={'text-gray-400'}>
                
            </span>
        </div>
    )
}