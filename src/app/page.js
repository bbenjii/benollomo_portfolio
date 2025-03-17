"use client";
import { Switch } from '@headlessui/react'
import { ExternalLink } from 'lucide-react';

import Image from 'next/image';
import {useEffect, useRef, useState} from "react";
import CustomCursor from '../components/customCursor';
import Link from 'next/link'

export default function Home() {

    const info_translations = {
        english: {
            fullName: "Benjamin Ollomo",
            firstName: "Ben",
            lastName: "Ollomo",
            title: "Computer Engineer Student",
            headline: "I'm an aspiring Software Engineer, passionated about building software and models.",
            bio: `I’m Benjamin, a software engineer and technology enthusiast with a passion for building innovative solutions. My experience spans across software development, AI-driven chatbots, and full-stack web applications. Currently, I’m refining my skills in Next.js while working on various projects, including a chatbot SaaS platform that integrates AI to enhance business workflows.\n\nBeyond software, I have a deep interest in martial arts, photography, and emerging technologies. My photography business covers live events such as concerts and release parties, blending my technical and artistic passions. I also train in Jiu-Jitsu and Muay Thai, balancing physical discipline with my tech-driven pursuits.\n\n I’m always eager to learn, explore new challenges, and collaborate on impactful projects. Whether it’s optimizing AI models, designing efficient systems, or capturing moments through a lens, I strive to bring creativity and precision to everything I do. Let’s connect and build something great!`,
            experiences: [
                {
                    title: "Software Developer Intern",
                    company: "XPENS.AI",
                    date: "September 2024 - April 2025",
                    location: "Montréal, QC",
                    description: "Worked as a python and react developer for xpens ai. I Was tasked with refactoring pages, improving their UI and UX along with code readibility. I implemented new features, such as a brand new Workflow management system, and a Automatic Learning Algorithm",
                    technology:[
                        "javascript",
                        "python",
                        "flask",
                        "react",
                        "mongoDB",
                        "unittest"
                    ]
                }
            ],
            projects: [
                {
                    title: "Sustainable City Carpooling Platform",
                    description: "Developed a carpooling web app for PolyHacks 2024, focusing on sustainable urban mobility. Led the database design using MongoDB Atlas, managing user authentication with Auth0 for a seamless login experience. Implemented JavaScript-based matching algorithms to optimize user connections and enhance ride-sharing efficiency. Worked in a team of three, demonstrating strong collaboration and problem-solving skills throughout the project.",
                    github_link: "https://github.com/bbenjii/Polyhacks2024",
                    "image": "",
                    "technology": [
                        "MongoDB",
                        "Express.js",
                        "Node",
                        "Auth0",
                    ]
                },
                {
                    title: "Real Estate Website",
                    description: "Developed an interactive real estate web platform to support essential property listing and management functionalities. Implemented server-side logic for features like search and filtering, ensuring a seamless user experience. Designed and managed a MySQL database to store listings, user data, offers, and requests. Worked in a team of five, utilizing Agile methodologies for structured development and efficient collaboration.",
                    github_link: "https://github.com/bbenjii/realestate-platform",
                    image: "",
                    technology: [
                        "Node",
                        "MySQL",
                        "AWS",
                        "Express.js",
                        "Jest"
                    ]
                },
                {
                    title: "Breast Cancer Prediction",
                    description: "Developed a predictive model to diagnose breast cancer using k-trees and ball-trees algorithms, improving accuracy in identifying cancerous cells. Processed and analyzed 700 patient cell samples to train the model, implementing the solution in Java. Gained hands-on experience in machine learning and data analysis through the project.",
                    github_link: "https://github.com/bbenjii/COEN352-Breast-Cancer-Diagnosis-Model",
                    image: "",
                    technology: [
                        "Data Science",
                        "ML",
                        "Java",
                    ]
                },
                {
                    title: "Portfolio Website",
                    description: "Designed and deployed a personal portfolio website showcasing projects and technical skills. Leveraged AWS S3 for hosting and used Bootstrap for a responsive design, ensuring optimal viewing across different devices. Focused on frontend development and cloud deployment to create an efficient and visually appealing site.",
                    github_link: "https://github.com/bbenjii/portfolio",
                    image: "",
                    technology: [
                        "next.js",
                        "GCP",
                        "react"
                    ]
                },
                {
                    title: "Sudoku Game",
                    description: "Built a dynamic Sudoku puzzle generator using a backtracking algorithm, ensuring solvable and challenging 9x9 grids. Designed an interactive and user-friendly interface using Python’s Pygame framework. Strengthened problem-solving and programming skills by implementing efficient algorithms for game logic.",
                    github_link: "https://github.com/bbenjii/Sudoku-Game",
                    image: "",
                    technology: [
                        "UI",
                        "Python ",
                        "Pygame"
                    ]
                }
            ]
        },
        french:{
            "fullName": "Benjamin Ollomo",
            "firstName": "Ben",
            "lastName": "Ollomo",
            "title": "Étudiant en génie informatique",
            "headline": "Je suis un futur ingénieur logiciel, passionné par la création de logiciels et de modèles.",
            "bio": "Je suis Benjamin, un ingénieur logiciel et un passionné de technologie, animé par le désir de créer des solutions innovantes. Mon expérience couvre le développement logiciel, les chatbots basés sur l'IA et les applications web full-stack. Actuellement, je perfectionne mes compétences en Next.js en travaillant sur divers projets, y compris une plateforme SaaS de chatbot intégrant l'IA pour améliorer les flux de travail en entreprise.\n\nAu-delà du développement logiciel, j’ai un vif intérêt pour les arts martiaux, la photographie et les nouvelles technologies. Mon entreprise de photographie couvre des événements en direct tels que des concerts et des soirées de lancement, alliant mes passions techniques et artistiques. Je pratique également le Jiu-Jitsu et le Muay Thai, équilibrant ainsi la discipline physique avec mes projets technologiques.\n\nToujours avide d’apprendre, d’explorer de nouveaux défis et de collaborer sur des projets à fort impact, je m'efforce d'apporter créativité et précision à tout ce que je fais. Que ce soit pour optimiser des modèles d’IA, concevoir des systèmes efficaces ou capturer des instants à travers un objectif, je suis prêt à relever de nouveaux défis. Connectons-nous et bâtissons ensemble quelque chose d’exceptionnel !",
            "experiences": [
                {
                    "title": "Stagiaire Développeur Logiciel",
                    "company": "XPENS.AI",
                    "date": "Septembre 2024 - Avril 2025",
                    "location": "Montréal, QC",
                    "description": "J'ai travaillé en tant que développeur Python et React chez XPENS.AI. J'ai été chargé de refactoriser des pages, d'améliorer leur interface utilisateur (UI) et leur expérience utilisateur (UX), ainsi que la lisibilité du code. J'ai également mis en œuvre de nouvelles fonctionnalités, notamment un tout nouveau système de gestion des flux de travail et un algorithme d'apprentissage automatique.",
                    "technology": [
                        "JavaScript",
                        "Python",
                        "Flask",
                        "React",
                        "MongoDB",
                        "Unittest"
                    ]
                }
            ],
            "projects": [
                {
                    "title": "Plateforme de Covoiturage Urbain Durable",
                    "description": "Développement d'une application web de covoiturage pour PolyHacks 2024, axée sur la mobilité urbaine durable. J'ai dirigé la conception de la base de données avec MongoDB Atlas et géré l'authentification des utilisateurs via Auth0 pour une expérience de connexion fluide. J'ai également implémenté des algorithmes de mise en relation en JavaScript afin d’optimiser les connexions entre utilisateurs. Projet réalisé en équipe de trois, mettant en avant la collaboration et la résolution de problèmes.",
                    "github_link": "https://github.com/bbenjii/Polyhacks2024",
                    "image": "",
                    "technology": [
                        "MongoDB",
                        "Express.js",
                        "Node",
                        "Auth0"
                    ]
                },
                {
                    "title": "Site Web Immobilier",
                    "description": "Développement d'une plateforme web interactive dédiée aux activités et fonctionnalités essentielles de l'immobilier. J'ai conçu et mis en place la logique côté serveur pour des fonctionnalités telles que la recherche et le filtrage, garantissant une expérience utilisateur fluide. J'ai également conçu et géré une base de données MySQL pour stocker les annonces, les données des utilisateurs, les offres et les demandes. Travail en équipe de cinq en appliquant les méthodologies Agile pour un développement structuré et une collaboration efficace.",
                    "github_link": "https://github.com/bbenjii/realestate-platform",
                    "image": "",
                    "technology": [
                        "Node",
                        "MySQL",
                        "AWS",
                        "Express.js",
                        "Jest"
                    ]
                },
                {
                    "title": "Prédiction du Cancer du Sein",
                    "description": "Développement d'un modèle prédictif pour diagnostiquer le cancer du sein en utilisant les algorithmes k-trees et ball-trees, améliorant ainsi la précision dans l'identification des cellules cancéreuses. J'ai traité et analysé 700 échantillons de cellules de patients pour entraîner le modèle, qui a été implémenté en Java. Ce projet m’a permis d'acquérir une expérience pratique en apprentissage automatique et en analyse de données.",
                    "github_link": "https://github.com/bbenjii/COEN352-Breast-Cancer-Diagnosis-Model",
                    "image": "",
                    "technology": [
                        "Science des données",
                        "Apprentissage automatique",
                        "Java"
                    ]
                },
                {
                    "title": "Site Web Portfolio",
                    "description": "Conception et déploiement d'un site web personnel de portfolio présentant mes projets et compétences techniques. Hébergement sur AWS S3 et utilisation de Bootstrap pour un design responsive, assurant une expérience optimale sur tous les types d'appareils. Ce projet m'a permis de me concentrer sur le développement frontend et le déploiement sur le cloud afin de créer un site efficace et esthétique.",
                    "github_link": "https://github.com/bbenjii/portfolio",
                    "image": "",
                    "technology": [
                        "Next.js",
                        "GCP",
                        "React"
                    ]
                },
                {
                    "title": "Jeu de Sudoku",
                    "description": "Développement d'un générateur dynamique de puzzles Sudoku utilisant un algorithme de backtracking, garantissant des grilles de 9x9 solvables et stimulantes. Conception d'une interface utilisateur interactive et intuitive avec le framework Pygame en Python. Ce projet m'a permis de renforcer mes compétences en résolution de problèmes et en programmation grâce à l'implémentation d'algorithmes efficaces pour la logique du jeu.",
                    "github_link": "https://github.com/bbenjii/Sudoku-Game",
                    "image": "",
                    "technology": [
                        "Interface utilisateur",
                        "Python",
                        "Pygame"
                    ]
                }
            ]
        }
    };
    const [info, setInfo] = useState(info_translations.english);


    const headers_translations = {
        english: {
            "about": "About",
            "projects": "Projects",
            "experience": "Experience",
            "interests": "Interests",
            "view_resume": "View resume",
        },
        french: {
            "about": "À propos",
            "projects": "Projets",
            "experience": "Expérience",
            "interests": "Centres d'intérêt",
            "view_resume": "Voir le CV"
        }
    }
    const [headers, setHeaders] = useState(headers_translations.english);

    const [activeSection, setActiveSection] = useState("");
    const [frenchMode, setFrenchMode] = useState(false);

    // Refs for container and each section
    const containerRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const interestsRef = useRef(null);
    // Scroll handler to determine which section is closest to the container top
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

    const switchLanguage = () => {
        if(frenchMode){
            setInfo(info_translations.french)
            setHeaders(headers_translations.french)
        }
        else{
            setInfo(info_translations.english)
            setHeaders(headers_translations.english)

        }
    }

    useEffect(() => {
        switchLanguage()
    }, [frenchMode])

    useEffect(() => {
        switchLanguage()
        const container = containerRef.current;
        if (!container) return;
        container.addEventListener("scroll", handleScroll);
        // Set initial active section
        handleScroll();
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Function to scroll the container to the desired section
    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

    return (
        <div className="h-screen w-screen">
            <CustomCursor/>
            <div className="flex min-w-250 max-w-300 h-full mx-auto">
                {/* Navigation Section */}
                <div className="flex flex-col w-3/7 justify-between py-30 ">
                    <div className="flex flex-col w-full">
                        <span className="py-3 text-5xl font-extrabold">{info.fullName}</span>
                        <span className="py-3 text-xl font-bold">{info.title}</span>
                        <span className="py-3 w-100 text-white/60">{info.headline}</span>

                        <div className="flex flex-col w-full mt-10">
                            <div className="flex group h-15 w-fit items-center cursor-pointer"
                                 onClick={() => scrollToSection(aboutRef)}>
                                <span
                                    className={`nav-indicator mx-3 border group-hover:w-12 group-hover:border-white border-solid ${activeSection === "about" ? "w-12" : "border-white/60 w-8"}`}/>
                                <span
                                    className={`mx-3 group-hover:text-white ${activeSection === "about" ? "" : "text-white/60"}`}>
                                    {headers.about}
                                </span>
                            </div>
                            <div className="flex group h-15 w-fit items-center cursor-pointer"
                                 onClick={() => scrollToSection(experienceRef)}>
                                <span
                                    className={`nav-indicator mx-3 border group-hover:w-12 group-hover:border-white border-solid ${activeSection === "experience" ? "w-12" : "border-white/60 w-8"}`}/>
                                <span
                                    className={`mx-3 group-hover:text-white ${activeSection === "experience" ? "" : "text-white/60"}`}>
                                    {headers.experience}
                                </span>
                            </div>
                            <div className="flex group h-15 w-fit items-center cursor-pointer"
                                 onClick={() => scrollToSection(projectsRef)}>
                                <span
                                    className={`nav-indicator mx-3 border group-hover:w-12 group-hover:border-white border-solid ${activeSection === "projects" ? "w-12" : "border-white/60 w-8"}`}/>
                                <span
                                    className={`mx-3 group-hover:text-white ${activeSection === "projects" ? "" : "text-white/60"}`}>
                                    {headers.projects}
                                </span>
                            </div>
                            <div className="flex group h-15 w-fit items-center cursor-pointer"
                                 onClick={() => scrollToSection(interestsRef)}>
                                <span
                                    className={`nav-indicator mx-3 border group-hover:w-12 group-hover:border-white border-solid ${activeSection === "interests" ? "w-12" : "border-white/60 w-8"}`}/>
                                <span
                                    className={`mx-3 group-hover:text-white ${activeSection === "interests" ? "" : "text-white/60"}`}>
                                    {headers.interests}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={"flex my-5 gap-2 h-20 text-sm "}>
                        <p onClick={()=>setFrenchMode(false)} className={`cursor-pointer select-none ${frenchMode === true ? "text-white/60" : "text-white font-bold"}`}>English</p>
                        <Switch
                            checked={frenchMode}
                            onChange={setFrenchMode}
                            className="group inline-flex hover:border hover:border-white/30 border border-white/0 h-6 w-11 cursor-pointer items-center rounded-full bg-primary-4/30  "
                        >
                            <span className="size-4 translate-x-1 rounded-full bg-primary-1 transition group-data-[checked]:translate-x-6" />
                        </Switch>
                        <p onClick={()=>setFrenchMode(true)} className={`cursor-pointer ${frenchMode === true ? "text-white font-bold" : "text-white/60"} `}>Français</p>
                    </div>
                    <div className="flex h-20 items-center w-full gap-10">
                        <a href="https://github.com/bbenjii" target="_blank" rel="noopener noreferrer">
                            <Image src={"/github-logo.png"} width={28} height={28} alt="Github Logo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/benjaminollomo/" target="_blank" rel="noopener noreferrer">
                            <Image src={"/linkedin-logo.png"} width={28} height={28} alt="Linkedin Logo"/>
                        </a>
                        <a href="mailto:benji.ollomo@gmail.com" rel="noopener noreferrer">
                            <Image src={"/mail-logo.png"} width={28} height={28} alt="Mail Logo"/>
                        </a>
                    </div>

                </div>


                {/* Scrollable Content Container */}
                <div
                    ref={containerRef} className="flex flex-col w-4/7 py-30 gap-30 overflow-y-auto no-scrollbar"
                    id="mainContainer"
                >
                    <div className="flex flex-col" ref={aboutRef}>
                        <p className="whitespace-pre-wrap text-white/60">
                            {info.bio}
                        </p>
                    </div>
                    <div className="flex flex-col" ref={experienceRef}>
                        {/* Experience content */}
                        {
                            info.experiences.map((experience, index) => {
                                return (
                                    <div key={index}
                                         className={"flex p-4 group gap-4 rounded-xl hover:shadow-lg border border-primary-1/0 hover:border-white/5 shadow-primary-2/30 hover:bg-primary-2/30  "}>
                                        <div className={"w-1/3 text-sm text-white/60"}>
                                            <span>
                                                {experience.date}
                                            </span>
                                        </div>
                                        <div className={"flex flex-col gap-4 w-2/3 text-white/60"}>
                                            <span
                                                className={"font-bold text-white group-hover:text-primary-4"}>{`${experience.title}, ${experience.company}`}</span>
                                            <span className={""}>{experience.description}</span>
                                            <div className={"flex gap-4"}>
                                                {experience.technology.map((technology, index) => {
                                                    return (
                                                        <div key={`experience-${index}`}
                                                             className={"bg-primary-4/20 text-primary-4 p-2 rounded-2xl text-xs"}>
                                                            {technology}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <Link href={"/resume"} target="_blank" rel="noopener noreferrer">
                            <span className="flex group w-fit items-center gap-2 ml-10 text-lg font-bold cursor-pointer font-bold text-white hover:text-primary-4">
                                {headers.view_resume}
                                <ExternalLink className={"size-4 group-hover:size-5"}/>
                            </span>
                        </Link>

                    </div>
                    <div className="flex flex-col" ref={projectsRef} id="projectSection">
                        {/* Projects content */}
                        {
                            info.projects.map((project, index) => {
                                return (
                                    <div key={index}
                                         className={"flex p-4 group gap-4 rounded-xl hover:shadow-lg border border-primary-1/0 hover:border-white/5 shadow-primary-2/30 hover:bg-primary-2/30  "}>
                                        <div className={"w-1/3 text-sm text-white/60"}>
                                            <span>
                                                {"image"}
                                            </span>
                                        </div>
                                        <div className={"flex flex-col gap-4 w-2/3 text-white/60"}>
                                            <span
                                                className={"font-bold text-white group-hover:text-primary-4"}>{`${project.title}`}</span>
                                            <span className={""}>{project.description}</span>
                                            <div className={"flex gap-4"}>
                                                {project.technology.map((technology, index) => {
                                                    return (
                                                        <div key={`project-${index}`}
                                                             className={"bg-primary-4/20 text-primary-4 p-2 rounded-2xl text-xs"}>
                                                            {technology}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col" ref={interestsRef}>
                        <span className="py-3 h-150 text-xl font-bold">Interests</span>
                        {/* Interests content */}

                    </div>
                </div>
            </div>
        </div>
    );
}