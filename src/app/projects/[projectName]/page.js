"use client";
import {use, useState} from 'react'
import {useEffect} from "react";
import {projects} from "@/utils/profile_info";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function ProjectPage({params}) {
    const { projectName } = use(params);
    const [project, setProject] = useState(null);
    
    useEffect(() => {
        const fetchedProject = projects.find(project => project.projectName === projectName);
        setProject(fetchedProject);
    }, [projectName])

    return (
      <div className={'flex flex-col px-4 py-16 w-full h-full gap-15'}>
          {
              project === null ? <p>Loading...</p> :
                  <>
                      <div className={'flex flex-col gap-1 mb-5'}>
                          <p className={"text-xl"}>{project.title}</p>
                          <p className={"text-gray-400"}>
                              {`Published: ${project.date}`}

                          </p>
                      </div>

                      <div className={'grid lg:grid-cols-2 gap-2 mb-5'}>
                          {
                              project.category &&
                              <div>
                                  <p className={"text-sm text-gray-400"}>{"Category"}</p>
                                  <p>{project.category}</p>
                              </div>
                          }
                          {
                              project.technology &&
                              <div>
                                  <p className={"text-sm text-gray-400"}>{"Tools"}</p>
                                  <p>
                                      {project.technology.join(', ')}
                                  </p>
                              </div>
                          }
                          {
                              project.repo_links ? 
                                  <div>
                                      <p className={"text-sm text-gray-400"}>{"Repos"}</p>
                                      <div className={"flex flex-col gap-2"}>
                                      {project.repo_links.map((link, index) => {
                                          return (
                                              <div key={index}>
                                                  <Link href={link} className={'flex cursor-pointer items-center group gap-1'} target="_blank" rel="noopener noreferrer">
                                                      <p className={"dotted-underline"}>{new URL(link).pathname.slice(1)}</p>
                                                      <ArrowUpRight size={16} className={"mb-1 group-hover:translate-x-1/8 group-hover:-translate-y-1/8 transition-transform duration-150"}/>

                                                  </Link>
                                              </div>
                                          )
                                      })}
                                      </div>
                                  </div> :
                                  project.github_link &&
                                  <div>
                                      <p className={"text-sm text-gray-400"}>{"Repo"}</p>
                                      <Link href={project.github_link} className={'flex cursor-pointer items-center group gap-1'} target="_blank" rel="noopener noreferrer">
                                          <p className={"dotted-underline"}>{new URL(project.github_link).pathname.slice(1)}</p>
                                          <ArrowUpRight size={16} className={"mb-1 group-hover:translate-x-1/8 group-hover:-translate-y-1/8 transition-transform duration-150"}/>

                                      </Link>
                                  </div>
                          }
                          {
                              project.link &&
                              <div>
                                  <p className={"text-sm text-gray-400"}>{"Link"}</p>
                                  <Link href={project.link} className={'flex cursor-pointer items-center group gap-1'} target="_blank" rel="noopener noreferrer">
                                      <p className={"dotted-underline"}>{project.link}</p>
                                      <ArrowUpRight size={16} className={"mb-1 group-hover:translate-x-1/8 group-hover:-translate-y-1/8 transition-transform duration-150"}/>

                                  </Link>
                              </div>
                          }
                      </div>
                      <div>
                          {
                              project.content &&
                              <div className="prose prose-invert ">
                                  <ReactMarkdown>
                                      {project.content}
                                  </ReactMarkdown>
                              </div>
                          }
                      </div>
                  </>
          }
          
      </div>
  )
}