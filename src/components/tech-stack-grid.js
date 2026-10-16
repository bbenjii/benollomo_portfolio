import Image from "next/image";

const tiers = [
    {name: "S", style: "bg-neutral-200 text-black"},
    {name: "A", style: "bg-neutral-300 text-black"},
    {name: "B", style: "bg-neutral-500 text-white"},
    {name: "C", style: "bg-neutral-800 text-white"},
];

export default function TechStackGrid({tech_stack = []}) {
    return (
        <section className="flex flex-col gap-5" aria-label="Tech Stack">
            <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-sky-300">TECH STACK</span>
                <p className="text-sm text-gray-400">calm tier list of the tech i use</p>
            </div>
            <div className="overflow-hidden">
                <table className="w-full table-fixed border-collapse text-left" aria-label="Tech stack tiers">
                    <colgroup>
                        <col className="w-9 sm:w-10"/>
                        <col/>
                    </colgroup>
                    <thead className="sr-only">
                        <tr><th scope="col">Tier</th><th scope="col">Technologies</th></tr>
                    </thead>
                    <tbody>
                        {tiers.map((tier) => (
                            <tr key={tier.name}>
                                <th scope="row" className={`text-center text-sm font-medium ${tier.style}`}>
                                    {tier.name}
                                </th>
                                <td className="p-2">
                                    <ul className="flex flex-wrap gap-x-2 gap-y-2">
                                        {tech_stack.filter((tech) => tech.tier === tier.name).map((tech) => (
                                            <li key={tech.name} className="flex w-14 flex-col items-center gap-1 text-center">
                                                <Image src={tech.icon} width={20} height={20}
                                                       className="size-5 shrink-0 object-contain" alt=""/>
                                                <span className="text-[10px] text-white/70">{tech.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
