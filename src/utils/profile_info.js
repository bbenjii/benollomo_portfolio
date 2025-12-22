export const tech_stack = [
    {
        name: "Python",
        icon: "/Python.png"
    }, {
        name: "Flask",
        icon: "/Flask.png"
    }, {
        name:"FastAPI",
        icon: "/FastAPI.png"
    }, {
        name: "React",
        icon: "/React.png"
    }, {
        name: "Git"
        , icon: "/Git.png"
    }, {
        name: "MongoDB"
        , icon: "/MongoDB.png"
    },
    {
        name: "SQL"
        , icon: "/SQLDeveloper.png"
    }, {
        name: "Tailwind"
        , icon: "/Tailwind.png"
    }, {
        name: "TypeScript"
        , icon: "/TypeScript.png"
    }, {
        name: "GCP", 
        icon: "/GoogleCloud.png"
    }, {
        name: "AWS", 
        icon: "/AWS.png"
    }
    
]
export const projects = [
    {
        title: "Sign Language Translator Glove",
        summary: "Real-time sign language translation",
        navigation_link: "/projects/sign-language-translator-glove",
        projectName: "sign-language-translator-glove",
        category: "Mobile app and Hardware",
        date: "2025",
        description:
            "Designed a smart glove that turns sign language into real-time text and speech through embedded sensors and machine learning.",
        github_link: "https://github.com/bbenjii/Sign-Language-Translator-Glove",
        image: "/project-sign-language-1.jpg",
        technology: ["ESP32", "TensorFlow", "Android Studio"],
        images: ["/project-sign-language-1.jpg"],
        content: `## Sign Language Translator Glove

### Overview

The **Sign Language Translator Glove** is a wearable assistive system that translates sign language gestures into real-time text and speech. It combines embedded hardware, Bluetooth communication, and a machine learning-powered Android application to improve communication between sign language users and non-signers.

---

### Core Features

- Real-time gesture-to-text and speech translation  
- Wearable glove with flex sensors and ESP32  
- Android mobile application with multiple interaction modes  
- TensorFlow Lite-based gesture classification  
- Customizable gesture mappings and gesture sets  
- Gesture learning, training, and history logging  
- Light and Dark mode with multilingual support

---

### Target Users & Impact

Designed for deaf and hard-of-hearing users, educators, and accessibility-focused institutions, the system promotes inclusive communication through wearable, ML-driven assistive technology.
`
    },

    {
        title: "Sustainable City Carpooling Platform",
        summary: "Sustainable ride-sharing platform",
        navigation_link: "/projects/sustainable-city-carpooling-platform",
        projectName: "sustainable-city-carpooling-platform",
        category: "Web app",
        date: "2024",
        description:
            "Built a carpooling web app for PolyHacks 2024 to promote sustainable urban mobility.",
        github_link: "https://github.com/bbenjii/Polyhacks2024",
        image: "/carpool-platform.png",
        technology: ["MongoDB", "Express.js", "Node.js"],
        content: `## Sustainable City Carpooling Platform

### Overview

A web-based ride-sharing platform built during PolyHacks 2024 to encourage sustainable urban transportation by connecting users with similar commuting routes.

---

### Key Features

- User authentication with Auth0  
- Ride matching algorithms for efficient carpooling  
- MongoDB Atlas-backed data model  
- RESTful API built with Node.js and Express  

---

### Impact

The platform promotes eco-friendly commuting by reducing single-occupancy vehicle usage and optimizing ride-sharing connections within cities.
`
    },

    {
        title: "Real Estate Website",
        summary: "Property listing and management",
        navigation_link: "/projects/real-estate-website",
        projectName: "real-estate-website",
        category: "Web app",
        date: "2023",
        description:
            "Built a real estate web platform with property listing and management features.",
        github_link: "https://github.com/bbenjii/realestate-platform",
        image: "/real-estate-website.png",
        technology: ["Node.js", "MySQL", "AWS", "Express.js", "Jest"],
        content: `## Real Estate Website

### Overview

A full-stack real estate platform allowing users to browse, search, and manage property listings through a structured and scalable web application.

---

### Key Features

- Property listing creation and management  
- Search and filtering by location and price  
- Relational MySQL database design  
- REST API built with Express and Node.js  

---

### Technical Focus

This project emphasizes backend architecture, database modeling, and API reliability for real-world web applications.
`
    },

    {
        title: "Portfolio Website",
        summary: "Personal portfolio website",
        navigation_link: "/projects/portfolio-website",
        projectName: "portfolio-website",
        category: "Web app",
        date: "2025",
        description:
            "Built and deployed a responsive portfolio website using Next.js and Tailwind CSS.",
        github_link: "https://github.com/bbenjii/portfolio",
        image: "/benollomo-logo.png",
        technology: ["Next.js", "Tailwind CSS", "AWS Amplify"],
        content: `## Portfolio Website

### Overview

A personal portfolio website designed to showcase projects, technical skills, and experience with a clean, modern, and responsive interface.

---

### Key Features

- Built with Next.js and App Router  
- Styled using Tailwind CSS and Typography  
- Markdown-driven project content  
- Deployed on AWS Amplify  

---

### Purpose

The site serves as a centralized platform to present selected projects and demonstrate frontend engineering, design consistency, and performance-focused development.
`
    }
];


export const info_translations = {
    english: {
        fullName: "Benjamin Ollomo",
        firstName: "Ben",
        lastName: "Ollomo",
        title: "Computer Engineering Student",
        headline: "Developer.\nTech enthusiast.\nInto fitness, martial arts, and photography.",
        bio: `I’m Benjamin, a software engineer and technology enthusiast with a passion for building innovative solutions. My experience spans across software development, AI-driven chatbots, and full-stack web applications. Currently, I’m refining my skills in Next.js while working on various projects, including a chatbot SaaS platform that integrates AI to enhance business workflows.\n\nBeyond software, I have a deep interest in martial arts, photography, and emerging technologies. My photography business covers live events such as concerts and release parties, blending my technical and artistic passions. I also train in Jiu-Jitsu and Muay Thai, balancing physical discipline with my tech-driven pursuits.\n\n I’m always eager to learn, explore new challenges, and collaborate on impactful projects. Whether it’s optimizing AI models, designing efficient systems, or capturing moments through a lens, I strive to bring creativity and precision to everything I do. Let’s connect and build something great!`,
        experiences: [
            {
                title: "Software Developer",
                company: "XPENS.AI",
                date: "Sep 2024 - Present",
                location: "Montréal, QC",
                description:
                    "I work across the frontend, backend, and cloud to build systems that automate and simplify invoice management. From designing user interfaces and APIs to deploying scalable cloud services, I focus on improving how companies extract, process, redact, and organize invoice data.",
                technology: ["Python", "React", "MongoDB", "Google Cloud"],
                image: "/xpens_banner.png"
            }
        ],
        education:[{
            program: "Computer Engineering",
            institution: "Concordia University",
            date: "2021 - 2026 (expected)",
            location: "Montréal, QC, Canada"
        }],
        projects: [
            {
                title: "Sign Language Translator Glove",
                description:
                    "Designed a smart glove that turns sign language into real-time text and speech through embedded sensors and machine learning.",
                github_link: "https://github.com/bbenjii/Sign-Language-Translator-Glove",
                image: "/project-sign-language-1.jpg",
                technology: ["ESP32", "TensorFlow Lite", "C++", "Android Studio", "Bluetooth"],
                images: ["/project-sign-language-1.jpg"]
            },
            {
                title: "Sustainable City Carpooling Platform",
                description:
                    "Built a carpooling web app for PolyHacks 2024 to promote sustainable urban mobility. Led database design with MongoDB Atlas and integrated Auth0 for secure authentication. Developed matching algorithms to optimize ride-sharing connections.",
                github_link: "https://github.com/bbenjii/Polyhacks2024",
                image: null,
                technology: ["MongoDB", "Express.js", "Node.js", "Auth0"]
            },
            {
                title: "Real Estate Website",
                description:
                    "Built a real estate web platform with property listing and management features. Implemented search and filtering logic and designed a MySQL database for listings, users, and offers.",
                github_link: "https://github.com/bbenjii/realestate-platform",
                image: "",
                technology: ["Node.js", "MySQL", "AWS", "Express.js", "Jest"]
            },
            {
                title: "Portfolio Website",
                description:
                    "Built and deployed a responsive portfolio website using Next.js, Tailwind CSS, and AWS Amplify to showcase projects and technical skills.",
                github_link: "https://github.com/bbenjii/portfolio",
                image: "",
                technology: ["Next.js", "Tailwind CSS", "AWS Amplify"]
            }
        ],
        tech_stack: {
            languages: ["Python", "JS/TS", "SQL", "Java", "C/C++"],
            frontend: ["React", "Next.js", "Tailwind"],
            backend: ["FastAPI/Flask", "Express.js", "REST APIs", "WebSockets"],
            cloudAndDevOps: ["Google Cloud", "AWS", "Vercel", "Docker"],
            aiAndAutomation: [
                "Google Vertex AI (Gemini)",
                "Google Document AI",
                "TensorFlow Lite"
            ],
            databases: ["MongoDB", "MySQL, PostgreSQL", "Firestore"],
            tools: ["GitHub", "Postman", "Pytest", "VS Code"]
        }
    },

    french: {
        fullName: "Benjamin Ollomo",
        firstName: "Ben",
        lastName: "Ollomo",
        title: "Étudiant en génie informatique",
        headline: "Développeur.\nPassionné de technologie.\nSport, arts martiaux et photographie.",
        bio: `Je suis Benjamin, ingénieur logiciel et passionné de technologie, animé par l’envie de créer des solutions innovantes. Mon expérience couvre le développement logiciel, les chatbots alimentés par l’IA et les applications web full-stack. En ce moment, je perfectionne mes compétences en Next.js tout en travaillant sur divers projets, dont une plateforme SaaS de chatbot qui intègre l’IA pour améliorer les workflows en entreprise.\n\nAu-delà du logiciel, je m’intéresse fortement aux arts martiaux, à la photographie et aux technologies émergentes. Mon entreprise de photographie couvre des événements en direct (concerts, soirées de lancement), alliant mes passions techniques et artistiques. Je pratique aussi le Jiu-Jitsu et le Muay Thai, conciliant discipline physique et projets technologiques.\n\nToujours curieux et ouvert aux défis, je cherche à collaborer sur des projets à fort impact. Qu’il s’agisse d’optimiser des modèles d’IA, de concevoir des systèmes efficaces ou de capturer des moments à travers l’objectif, j’apporte créativité et précision à tout ce que je fais.`,
        experiences: [
            {
                title: "Développeur logiciel",
                company: "XPENS.AI",
                date: "Sept. 2024 – Présent",
                location: "Montréal, QC",
                description:
                    "J’interviens sur le frontend, le backend et le cloud pour concevoir des systèmes qui automatisent et simplifient la gestion des factures. De la création d’interfaces et d’APIs au déploiement de services cloud évolutifs, je vise à améliorer l’extraction, le traitement, la rédaction et l’organisation des données de factures.",
                technology: ["Python", "React", "MongoDB", "Google Cloud"],
                image: "/xpens_banner.png"
            }
        ],
        projects: [
            {
                title: "Gant traducteur de langue des signes",
                description:
                    "Conception d’un gant intelligent et d’une application mobile qui transforment les gestes en texte et parole en temps réel grâce à des capteurs embarqués et au machine learning.",
                github_link: "https://github.com/bbenjii/Sign-Language-Translator-Glove",
                image: "/project-sign-language-1.jpg",
                technology: ["ESP32", "TensorFlow Lite", "C++", "Android Studio", "Bluetooth"],
                images: ["/project-sign-language-1.jpg"]
            },
            {
                title: "Plateforme de covoiturage durable",
                description:
                    "Application web réalisée pour PolyHacks 2024 afin de favoriser une mobilité urbaine durable. Conception de la base de données avec MongoDB Atlas, intégration d’Auth0 et algorithmes de mise en relation pour optimiser les trajets partagés.",
                github_link: "https://github.com/bbenjii/Polyhacks2024",
                image: null,
                technology: ["MongoDB", "Express.js", "Node.js", "Auth0"]
            },
            {
                title: "Site immobilier",
                description:
                    "Plateforme immobilière avec publication, recherche et gestion d’annonces. Implémentation de la logique de recherche/filtrage et conception d’une base MySQL pour les annonces, utilisateurs et offres.",
                github_link: "https://github.com/bbenjii/realestate-platform",
                image: "",
                technology: ["Node.js", "MySQL", "AWS", "Express.js", "Jest"]
            },
            {
                title: "Site portfolio",
                description:
                    "Conception et déploiement d’un portfolio responsive avec Next.js, Tailwind CSS et AWS Amplify pour présenter projets et compétences.",
                github_link: "https://github.com/bbenjii/portfolio",
                image: "",
                technology: ["Next.js", "Tailwind CSS", "AWS Amplify"]
            }
        ],
        tech_stack: {
            languages: ["Python", "JS/TS", "SQL", "Java", "C/C++"],
            frontend: ["React", "Next.js", "Tailwind"],
            backend: ["FastAPI/Flask", "Express.js", "APIs REST", "WebSockets"],
            cloudAndDevOps: ["Google Cloud", "AWS", "Vercel", "Docker"],
            aiAndAutomation: [
                "Google Vertex AI (Gemini)",
                "Google Document AI",
                "TensorFlow Lite"
            ],
            databases: ["MongoDB", "MySQL, PostgreSQL", "Firestore"],
            tools: ["GitHub", "Postman", "Pytest", "VS Code"]
        }
    }
};

export const headers_translations = {
    english: {
        about: "About",
        projects: "Projects",
        experience: "Experience",
        interests: "Interests",
        view_resume: "View resume",
        chat_with_ben: "Ben-Bot",
        tech_stack: "Tech Stack",
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        cloudAndDevOps: "Cloud & DevOps"
    },
    french: {
        about: "À propos",
        projects: "Projets",
        experience: "Expérience",
        interests: "Centres d'intérêt",
        view_resume: "Voir le CV",
        chat_with_ben: "Ben-Bot",
        tech_stack: "Stack technique",
        languages: "Langages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de données",
        cloudAndDevOps: "Cloud & DevOps"
    }
};

export const chatbot_system_instructions = "### 🤖 System Instruction: Chatbot for Ben's Portfolio Website\n" +
    "\n" +
    "You are a friendly, playful, and helpful chatbot integrated into Ben’s personal portfolio website. Your job is to help visitors — including recruiters, collaborators, and curious minds — learn more about **Ben** (not Benjamin or Benjamin Ollomo), his background, experiences, projects, skills, and interests.\n" +
    "\n" +
    "You must only answer questions based on the context provided below. However, you **can** respond to related or naturally connected questions if they help someone better understand Ben. For example, if someone asks “what is BJJ?”, you can answer that since Ben practices it and it's part of the context. " +
    "Keep it as concise as you can, and always include an emoji in the response." +
    "Visitors will most likely be speaking english or french, so be prepared to answer in whatever language they communicate with you in.\n" +
    "\n" +
    "⚠️ If a question is:\n" +
    "- Irrelevant to Ben or the context,\n" +
    "- Inappropriate, offensive, or too personal,\n" +
    "- About topics you’re not trained to respond to (like medical, legal, financial advice),\n" +
    "\n" +
    "Then politely respond with something like:  \n" +
    "*\"I’m just here to talk about Ben and his work! Not sure how to help with that one 😊\"*\n" +
    "\n" +
    "---\n" +
    "\n" +
    "### 🎒 Who is Ben?\n" +
    "\n" +
    "Ben is a Computer Engineering student at **Concordia University** in **Montreal, QC**, expected to graduate in **2026**. He is from Gabon, but did his secondary school years in Lusaka, Zambia, graduated highschool with an International Baccalaureate (IB). He’s a curious and driven builder who loves solving problems through software, whether it’s developing full-stack applications, building AI-powered chatbots, or crafting interactive user interfaces.\n" +
    "\n" +
    "He speaks **English and French**, and has worked with tools and languages like:\n" +
    "- **JavaScript, Python, Java, C++, SQL, TypeScript**\n" +
    "- **React, Next.js, Flask, Node.js, Tailwind CSS**\n" +
    "- **MongoDB, MySQL, AWS, Docker, GitHub**\n" +
    "\n" +
    "He’s also earned certifications from AlgoExpert and Udemy courses in **REST APIs**, **Data Science**, and **Machine Learning**.\n" +
    "\n" +
    "---\n" +
    "\n" +
    "### 💼 Experience\n" +
    "\n" +
    "- **Software Developer Intern** at **XPENS.AI** (Sept 2024 – May 2025)  \n" +
    "  He worked with **Python** and **React**, revamped user interfaces, improved code readability, and built new features like a **workflow management system** and **auto-learning algorithm**.\n" +
    "\n" +
    "- **Shift Lead** at **Falafel Yoni** (Apr 2022 – Aug 2024)  \n" +
    "  Ben led a team of three, managed operations, and showed strong leadership and teamwork — even in high-pressure environments (like a rush-hour shawarma line).\n" +
    "\n" +
    "---\n" +
    "###Contact Information\n"+
    "email: 'benji.ollomo@gmail.com' linkedin: 'https://www.linkedin.com/in/benjaminollomo/' github: 'https://github.com/bbenjii'\n " +
    "\n" +
    "### 🧪 Projects\n" +
    "\n" +
    "- **Sustainable City Carpooling Platform**  \n" +
    "  Built for PolyHacks 2024. Ben created ride-matching logic in JavaScript, used MongoDB Atlas, and implemented secure login with Auth0.\n" +
    "\n" +
    "- **Real Estate Platform**  \n" +
    "  A team-built academic web app featuring property listings, filters, and backend logic with MySQL and Node.js.\n" +
    "\n" +
    "- **Breast Cancer Prediction Model**  \n" +
    "  Ben built a Java-based predictive model using k-trees and ball-trees, trained on 700 samples to identify cancerous cells.\n" +
    "\n" +
    "- **Portfolio Website**  \n" +
    "  This very site you’re chatting on — hosted on AWS S3, responsive thanks to Bootstrap, and showcasing Ben’s journey.\n" +
    "\n" +
    "- **Sudoku Game**  \n" +
    "  A Python + Pygame logic puzzle generator that dynamically builds solvable boards using backtracking.\n" +
    "\n" +
    "---\n" +
    "\n" +
    "### 🥋 Interests\n" +
    "\n" +
    "Outside of code, Ben is a blue belt in **Brazilian Jiu-Jitsu**, practices **Muay Thai**, and trains regularly. He’s also a passionate **photographer**, covering events like concerts and release parties, blending creativity and tech.\n" +
    "\n" +
    "He’s obsessed with learning and building things that matter — from smart AI agents to impactful web apps. He’s a team player, great communicator, and isn’t afraid to jump into a challenge.\n" +
    "\n" +
    "---\n" +
    "\n" +
    "### 💡 One-Shot Examples\n" +
    "\n" +
    "#### Example 1  \n" +
    "**User:** What programming languages does Ben use?  \n" +
    "**Assistant:** Oh, he’s got a solid toolkit! Python, JavaScript, TypeScript, Java, C++, and SQL — just to name a few. 🔧💻\n" +
    "\n" +
    "---\n" +
    "\n" +
    "#### Example 2  \n" +
    "**User:** What’s BJJ?  \n" +
    "**Assistant:** BJJ stands for Brazilian Jiu-Jitsu — it’s a martial art focused on grappling and submissions. Ben trains regularly and is actually a blue belt! 🥋\n" +
    "\n" +
    "---\n" +
    "\n" +
    "#### Example 3  \n" +
    "**User:** Can Ben help me with financial planning?  \n" +
    "**Assistant:** Hmm… Ben’s your go-to for software and creativity — not spreadsheets and tax returns 😅. I’d recommend a financial advisor for that!\n" +
    "\n" +
    "---\n" +
    "\n" +
    "#### Example 4  \n" +
    "**User:** Is Ben looking for opportunities?  \n" +
    "**Assistant:** Yes! He’s open to exciting opportunities and collaborations. You can reach him at **benji.ollomo@gmail.com** 📬\n" +
    "\n" +
    "---\n" +
    "\n" +
    "#### Example 5  \n" +
    "**User:** What does Ben do for fun?  \n" +
    "**Assistant:** He’s either training BJJ or Muay Thai, snapping photos at events, or building cool tech projects. Balance of brain and brawn 💥📸\n" +
    "\n" +
    "---\n" +
    "\n" +
    "#### Example 6  \n" +
    "**User:** What university does Ben attend?  \n" +
    "**Assistant:** Ben studies Computer Engineering at **Concordia University** in Montreal! 🎓\n" +
    "\n" +
    "---\n" +
    "\n" +
    "Use this tone — kind, casual, and helpful — and always keep the responses grounded in the context above.\n" +
    "\n" +
    "You’re here to make visitors feel welcome and informed while letting Ben’s personality and skills shine. 🌟\n"
