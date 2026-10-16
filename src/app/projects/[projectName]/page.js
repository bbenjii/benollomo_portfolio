import Image from "next/image";
import {readFile} from "node:fs/promises";
import path from "node:path";
import ProjectMarkdown from "@/components/project-markdown";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck} from "lucide-react";
import ReactMarkdown from "react-markdown";
import {projects} from "@/utils/profile_info";
import {projectCaseStudies} from "@/utils/project_case_studies";

export const dynamicParams = false;

export function generateStaticParams() {
    return projects.map(({projectName}) => ({projectName}));
}

export async function generateMetadata({params}) {
    const {projectName} = await params;
    const project = projects.find((item) => item.projectName === projectName);

    if (!project) return {title: "Project not found"};

    return {
        title: `${project.title} | Ben Ollomo`,
        description: project.description || project.summary,
    };
}

function ExternalLink({href, children}) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 dotted-underline group break-all">
            <span>{children}</span>
            <ArrowUpRight size={16}
                          className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"/>
        </Link>
    );
}

function Section({eyebrow, title, children}) {
    return (
        <section className="grid gap-4 border-t border-white/10 pt-8 lg:grid-cols-[180px_1fr] lg:gap-10">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">{eyebrow}</p>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-medium text-white">{title}</h2>
                {children}
            </div>
        </section>
    );
}

function BulletList({items, icon: Icon = CheckCircle2}) {
    return (
        <ul className="grid gap-3">
            {items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/70">
                    <Icon size={17} className="mt-1 shrink-0 text-white/45" aria-hidden="true"/>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function ArchitectureFlow({items}) {
    return (
        <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
            {items.map((item, index) => (
                <div className="contents" key={item.name}>
                    <div className="rounded-lg border border-white/10 bg-secondary-1 p-4">
                        <p className="font-medium">{item.name}</p>
                        <p className="mt-2 text-sm leading-6 text-white/60">{item.detail}</p>
                    </div>
                    {index < items.length - 1 && (
                        <ArrowRight className="mx-auto rotate-90 self-center text-white/30 lg:rotate-0" size={18} aria-hidden="true"/>
                    )}
                </div>
            ))}
        </div>
    );
}

function CaseStudy({project, caseStudy}) {
    return (
        <>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-secondary-1">
                <Image src={project.image} alt={`${project.title} project cover`} width={1200} height={720}
                       sizes="(max-width: 800px) 100vw, 800px" className="h-auto w-full" priority/>
            </div>

            <Section eyebrow="01 — Context" title="The problem">
                <p className="max-w-2xl leading-7 text-white/70">{caseStudy.problem}</p>
            </Section>

            <Section eyebrow="02 — Ownership" title="My role and constraints">
                <p className="max-w-2xl leading-7 text-white/70">{caseStudy.role}</p>
                <BulletList items={caseStudy.constraints}/>
            </Section>

            <Section eyebrow="03 — System" title="Architecture">
                <p className="max-w-2xl leading-7 text-white/70">{caseStudy.architecture.summary}</p>
                <ArchitectureFlow items={caseStudy.architecture.layers}/>
            </Section>

            <Section eyebrow="04 — Decisions" title="Important engineering decisions">
                <div className="grid gap-4 lg:grid-cols-2">
                    {caseStudy.decisions.map((decision) => (
                        <article key={decision.title} className="rounded-lg border border-white/10 bg-secondary-1 p-5">
                            <h3 className="font-medium">{decision.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-white/65">{decision.detail}</p>
                            <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-white/45">
                                <span className="text-white/70">Trade-off:</span> {decision.tradeoff}
                            </p>
                        </article>
                    ))}
                </div>
            </Section>

            <Section eyebrow="05 — Trust" title="Security and reliability">
                <BulletList items={caseStudy.securityReliability} icon={ShieldCheck}/>
            </Section>

            <Section eyebrow="06 — Delivery" title="What shipped">
                <BulletList items={caseStudy.shipped}/>
            </Section>

            <Section eyebrow="07 — Evidence" title="Verification and outcome">
                <BulletList items={caseStudy.verification}/>
            </Section>

            <Section eyebrow="08 — Reflection" title="What I learned">
                <p className="max-w-2xl leading-7 text-white/70">{caseStudy.learnings}</p>
            </Section>
        </>
    );
}

export default async function ProjectPage({params}) {
    const {projectName} = await params;
    const project = projects.find((item) => item.projectName === projectName);

    if (!project) notFound();

    const markdownProjects = ["nora", "nasan-energies-website", "stocksfeed-ai-news-pipeline",
        "smart-door-lock-security-system", "sign-language-translator-glove", "reelly"];
    const markdown = markdownProjects.includes(projectName)
        ? await readFile(path.join(process.cwd(), "src/content/projects", `${projectName}.md`), "utf8")
        : null;
    const caseStudy = projectCaseStudies[projectName];
    const repositoryLinks = project.repo_links || (project.github_link ? [project.github_link] : []);

    return (
        <main className="flex w-full flex-col gap-12 px-4 py-16">
            <header className="flex max-w-2xl flex-col gap-4">
                <h1 className="text-3xl font-medium tracking-tight lg:text-4xl">{project.title}</h1>
                <p className="text-lg leading-8 text-white/65">{project.description || project.summary}</p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    {repositoryLinks.map((link) => (
                        <ExternalLink href={link} key={link}>{new URL(link).pathname.slice(1)}</ExternalLink>
                    ))}
                    {project.link && <ExternalLink href={project.link}>Live site</ExternalLink>}
                </div>
            </header>

            <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                {project.technology?.map((technology) => (
                    <span key={technology}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                        {technology}
                    </span>
                ))}
            </div>

            {markdown ? (
                <ProjectMarkdown content={markdown}/>
            ) : caseStudy ? (
                <CaseStudy project={project} caseStudy={caseStudy}/>
            ) : project.content ? (
                <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>{project.content}</ReactMarkdown>
                </div>
            ) : null}
        </main>
    );
}
