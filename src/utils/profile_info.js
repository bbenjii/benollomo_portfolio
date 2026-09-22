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
        title: "ApolloFi",
        summary: "AI-assisted personal finance platform built around trustworthy financial data",
        navigation_link: "/projects/apollofi",
        projectName: "apollofi",
        category: "Financial Technology, AI, and Full Stack",
        date: "2026",
        description:
            "Designed and built a personal finance platform that turns connected account and statement data into clear, evidence-backed financial views and conversations.",
        github_link: "https://github.com/bbenjii/apollofi",
        image: "/apollofi-cover.svg",
        technology: [
            "Next.js",
            "TypeScript",
            "FastAPI",
            "MongoDB",
            "Gemini",
            "Plaid",
            "Google Cloud",
            "Cloud Run",
            "Cloud Tasks",
        ],
        content: `## AI-assisted personal finance, grounded in real data

### The problem

Financial data arrives from different providers and documents, often with inconsistent account, merchant, category, and transaction structures. ApolloFi is designed to create a dependable financial record first, then use that record to help people understand their position, cash flow, and spending.

### What I built

- A canonical finance model that keeps user-owned accounts and transactions independent of any single data provider
- Plaid connection and statement-ingestion workflows for bringing financial activity into one product
- Account balances, transaction history, merchant and category analysis, recurring payments, and period comparisons
- Currency-aware financial summaries that avoid combining incompatible totals
- An AI finance chat that answers through bounded, read-only tools and structured evidence instead of unsupported claims
- Shared analytical contracts so dashboard and conversational experiences use the same underlying calculations

### Product and engineering decisions

The core financial calculations remain deterministic and application-owned. Gemini is used for explanation and coaching over structured results, not as the source of financial truth. This keeps answers traceable and lets the interface link an insight back to the accounts, transactions, merchants, or categories behind it.

Synchronization was designed around user ownership, idempotent writes, cursor safety, and durable background execution. Privacy and operational work includes isolating credentials by environment, keeping secrets server-side, encrypting provider credentials, and treating deployment configuration, deployed revisions, and live traffic as separate verification states.

### Architecture

ApolloFi combines a Next.js dashboard with a FastAPI backend and MongoDB persistence. Plaid and statement ingestion feed the canonical finance layer; Gemini consumes a constrained finance-tool surface; Google Cloud Run and Cloud Tasks support deployment and background work.

### Current direction

The product continues to evolve around a simple discovery path: financial overview, supporting detail, filtered transactions, and an optional evidence-backed explanation. The focus is making complex financial information useful without sacrificing accuracy, ownership boundaries, or user trust.
`,
    },
    {
        title: "Nasan Energies Website",
        summary: "Production corporate website and CMS for a Namibian energy company",
        navigation_link: "/projects/nasan-energies-website",
        projectName: "nasan-energies-website",
        category: "Client Work, Web Platform, and CMS",
        date: "2026",
        description:
            "Built a production marketing platform for Nasan Energies with structured content management, a service-station locator, careers publishing, and search-ready public pages.",
        github_link: "https://github.com/bbenjii/nasan-website",
        image: "/nasan-cover.svg",
        link: "https://www.nasanenergies.com/",
        technology: [
            "Next.js",
            "TypeScript",
            "React",
            "Sanity",
            "GROQ",
            "Google Maps",
            "Tailwind CSS",
            "Docker",
        ],
        content: `## A maintainable digital platform for Nasan Energies

### The brief

Nasan Energies needed more than a static company page. The website had to communicate the brand clearly, help customers find service stations, support changing newsroom and careers content, and remain straightforward for future developers and content editors to maintain.

### What I built

- A responsive Next.js corporate website aligned with Nasan's visual identity and messaging
- Sanity-managed homepage, newsroom, service-station, call-to-action, and careers content
- An interactive Google Maps station locator with search, markers, clustering, and directions
- Careers listings and vacancy detail pages designed for both direct navigation and QR-code campaigns
- SEO foundations including canonical metadata, structured data, sitemap, robots rules, and social sharing metadata
- Responsive navigation and section-level links that work consistently across routes and screen sizes

### Content architecture

The CMS uses focused document types rather than an unstructured page blob. Singleton documents manage shared section copy, while independently queryable records represent articles, stations, and vacancies. Server-rendered pages fetch structured GROQ results and retain deliberate fallbacks where operational content still needs validation.

### Production and maintenance

The application supports standalone Next.js deployment through Docker. Build-time configuration is validated for the public site origin, Sanity, and Google Maps so metadata and integrations do not silently point at development environments.

I also produced architecture-first technical documentation explaining how content, routes, external services, environment variables, deployment, and maintenance fit together. This makes the project easier to operate and extend without requiring knowledge of its original implementation history.

### Outcome

The result is a public-facing platform that balances brand presentation with practical product capabilities: customers can discover the company and its locations, while Nasan can publish timely content through a structured authoring workflow.
`,
    },
    {
        title: "StocksFeed AI News ",
        summary: "AI-analyzed market news for traders and algo trading developers",
        navigation_link: "/projects/stocksfeed-ai-news-pipeline",
        projectName: "stocksfeed-ai-news-pipeline",
        category: "Full Stack and Data Pipeline",
        date: "2025",
        description:
            "Built an automated pipeline that scrapes financial news, uses an LLM to extract structured signals like sentiment and impacted tickers, and powers a searchable web app for AI-analyzed market articles.",
        github_link: "https://github.com/bbenjii/stocksfeed-ai",
        repo_links: ["https://github.com/bbenjii/stockfeedai-web", "https://github.com/bbenjii/stockfeedai-server"], 
        image: "/stocksfeed-ai.png",
        link: "https://stocksfeed.benollomo.com/",
        technology: [
            "Python",
            "FastAPI",
            "MongoDB",
            "GCP",
            "React",
            "TypeScript",
        ],
        images: ["/project-stocksfeed-1.jpg"],
        content: `## AI-Analyzed Market News Platform

### Overview

This project is an automated pipeline that continuously scrapes stock market–related news articles and analyzes them using large language models. The goal is to transform unstructured financial news into structured, quantitative signals that can be used for market analysis and algorithmic trading.

The system was inspired by the way human investors rely on news to interpret market movements, and explores how software can replicate that process at scale.

---

### Core Features

- Automated scraping of financial news from reliable sources  
- LLM-based extraction of structured signals from articles  
- Sentiment scoring to quantify positive and negative market impact  
- Identification of affected stocks and tickers  
- Short-term vs long-term impact classification  
- AI-generated article summaries for human readability  
- Centralized database storing enriched article data  

---

### System Architecture

The analysis pipeline is deployed as a cloud function triggered every five minutes. On each execution, the system fetches the latest articles, processes them through the analysis layer, and stores the enriched results in a database. This creates a continuously updating dataset of market-aware news signals.

---

### Web Application

On top of the data pipeline, a web application was built to allow users to search, browse, and read AI-analyzed financial news. This made the project both a developer-facing tool and a user-facing product, while providing hands-on experience with full stack development.

---

### Future Plans

Depending on demand, the platform may expose public APIs, allowing developers and traders to integrate news-based signals into their own tools, dashboards, or algorithmic trading systems.
`,
    },
    {
        title: "Smart Door Lock and Security System",
        summary: "IoT-based smart lock with camera, remote control, and multi-factor authentication",
        navigation_link: "/projects/smart-door-lock-security-system",
        projectName: "smart-door-lock-security-system",
        category: "IoT, Embedded Systems, and Full Stack",
        date: "2025",
        description:
            "Designed and built an IoT-enabled smart door lock system integrating hardware control, real-time communication, and a full-stack application for secure remote access and monitoring.",
        // github_link: "https://github.com/bbenjii/SmartLock", // update if needed
        repo_links: ["https://github.com/bbenjii/smart-doorlock-server", "https://github.com/bbenjii/smart-doorlock-app", "https://github.com/bbenjii/smart-doorlock-hardware"],
        image: "/smart-doorlock.png",
        technology: [
            "ESP32",
            "Python",
            "FastAPI",
            "WebSockets",
            "React Native",
            "Firebase",
            "OpenCV",
            "C++"
        ],
        images: ["/project-doorlock-1.jpg"],
        content: `## Smart Door Lock and Security System

### Overview

This project is a full-stack IoT system that enables secure and intelligent door access through a combination of embedded hardware, real-time communication, and a mobile application.

The system integrates a smart lock device with a backend server and a mobile app, allowing users to monitor and control access remotely while maintaining local functionality.

---

### Core Features

- Multi-factor authentication (face recognition, Bluetooth, remote access)  
- Real-time lock/unlock control via mobile application  
- Live camera streaming and motion-triggered recording  
- Two-way audio communication between user and visitor  
- Event logging and system monitoring  
- Offline-capable local control with optional cloud integration  

---

### System Architecture

The system is composed of three main layers:

- **Device Layer**: Embedded system (ESP32 / Raspberry Pi) handling sensors, camera, and lock actuator  
- **Backend Layer**: FastAPI server managing device communication, authentication, and event routing via WebSockets  
- **Application Layer**: React Native mobile app for control, monitoring, and onboarding  

The backend maintains persistent connections with devices and pushes real-time updates to users. 

---

### Technical Highlights

- Designed a modular firmware architecture with drivers, services, and domain layers  
- Implemented real-time bidirectional communication using WebSockets  
- Built a scalable backend with REST APIs and event-driven updates  
- Developed a mobile app with device onboarding (Bluetooth) and live monitoring  
- Integrated camera streaming with low-latency frame delivery  

---

### Engineering Scope

This project was developed as part of a capstone engineering course, involving full lifecycle development including system design, prototyping, testing, and validation

The system combines embedded systems, networking, and software engineering into a single cohesive product.

---

### Outcome

Delivered a fully functional prototype capable of secure access control, remote monitoring, and real-time interaction, demonstrating a complete IoT ecosystem from hardware to user interface.
`
    },
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
                link: "https://xpens.ai/",
                description:
                    "I work across the frontend, backend, and cloud to build systems that automate and simplify invoice management. From designing user interfaces and APIs to deploying scalable cloud services, I focus on improving how companies extract, process, redact, and organize invoice data.",
                technology: ["Python", "React", "MongoDB", "Google Cloud"],
                image: "/xpens_banner.png"
            },
            {
                title: "Website developer",
                company: "Nasan Energies",
                date: "2026",
                location: "Montréal, QC",
                link: "https://nasanenergies.com/",
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
    "You prioritize Ben and the context below, but you can also answer general knowledge questions in a concise, factual, and upbeat way. If a general question connects back to Ben, weave that in naturally. Keep replies tight and include an emoji. Visitors will most likely speak English or French, so reply in their language. Ben’s favorite anime is **One Piece**.\n" +
    "\n" +
    "⚠️ If a question is inappropriate, offensive, or seeks medical/legal/financial advice, decline politely with a friendly note.\n" +
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
    "He’s refining his skills in **Next.js** and building a **chatbot SaaS platform** that integrates AI to improve business workflows. He also runs a **photography business** covering concerts and release parties.\n" +
    "\n" +
    "He’s also earned certifications from AlgoExpert and Udemy courses in **REST APIs**, **Data Science**, and **Machine Learning**.\n" +
    "\n" +
    "---\n" +
    "\n" +
    "### 💼 Experience\n" +
    "\n" +
    "- **Software Developer** at **XPENS.AI** (Sept 2024 – Present)  \n" +
    "  Works across the frontend, backend, and Google Cloud to automate invoice management. Built UI improvements, a **workflow management system**, and an **auto-learning algorithm** for smarter document handling.\n" +
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
    "- **StocksFeed AI News Pipeline**  \n" +
    "  Automated pipeline that scrapes financial news, uses LLMs (Gemini/OpenAI) to extract signals like sentiment and impacted tickers, and powers a web app for AI-analyzed market articles.\n" +
    "\n" +
    "- **Sign Language Translator Glove**  \n" +
    "  A smart glove with embedded sensors and TensorFlow Lite that turns sign language into real-time text and speech via an Android app.\n" +
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
    "### 🛠️ Tech Stack & Tools\n" +
    "\n" +
    "- Languages: **Python, JavaScript/TypeScript, SQL, Java, C/C++**  \n" +
    "- Frontend: **React, Next.js, Tailwind CSS**  \n" +
    "- Backend/APIs: **FastAPI/Flask, Express.js, REST APIs, WebSockets**  \n" +
    "- Cloud/DevOps: **Google Cloud, AWS, Vercel, Docker**  \n" +
    "- AI & Automation: **Google Vertex AI (Gemini), Google Document AI, TensorFlow Lite**  \n" +
    "- Databases: **MongoDB, MySQL, PostgreSQL, Firestore**  \n" +
    "- Tools: **GitHub, Postman, Pytest, VS Code**\n" +
    "\n" +
    "---\n" +
    "\n" +
    "### 🥋 Interests\n" +
    "\n" +
    "Outside of code, Ben is a blue belt in **Brazilian Jiu-Jitsu**, practices **Muay Thai**, trains **calisthenics**, and lifts weights regularly. He’s also a passionate **photographer**, covering events like concerts and release parties, blending creativity and tech.\n" +
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
