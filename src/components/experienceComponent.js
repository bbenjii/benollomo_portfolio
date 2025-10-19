import Image from "next/image";

export default function ExperienceComponent({experience}) {
    return (
        <div className={"flex flex-col mt-3 lg:flex-row lg:p-4 group gap-4 rounded-xl"}>
            <div className={"flex flex-col gap-3 text-white/60"}>
                <div className={"flex justify-between"}>
                <span className={"font-bold text-white"}>
                    {`${experience.title}`}
                </span>
                    <span className={"text-sm text-white/60"}>                     
                    {experience.date}
                </span>
                </div>
                <span className={" text-white/60"}>                     
                    {experience.company}
                </span>
                <span className={""}>
                    {experience.description}
                </span>
            </div>
        </div>
    )
}