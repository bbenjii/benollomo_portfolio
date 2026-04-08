"use client";

import {
    CalendarDays,
    Camera,
    Compass,
    Languages,
    MapPin,
    MessageCircleMore,
    Sparkles,
    Users
} from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Buddy matching",
        description: "Match local and international students by language level, shared interests, and background.",
        tone: "from-[#ff8a5b]/20 to-[#ffd166]/10",
    },
    {
        icon: Languages,
        title: "French, socially",
        description: "Practice French through guided local activities instead of isolated classroom-only repetition.",
        tone: "from-[#22c55e]/20 to-[#86efac]/10",
    },
    {
        icon: CalendarDays,
        title: "Weekly moments",
        description: "Join cafe meetups, city walks, study sessions, cultural outings, and low-pressure events.",
        tone: "from-[#38bdf8]/20 to-[#60a5fa]/10",
    },
    {
        icon: MessageCircleMore,
        title: "Community threads",
        description: "Keep conversations moving through subgroup chats, event replies, and active participation.",
        tone: "from-[#f472b6]/20 to-[#fb7185]/10",
    },
];

const feedItems = [
    {
        name: "Nora",
        tag: "Concordia ambassador",
        time: "2h",
        text: "Old Port walk this Saturday. French beginners welcome, no pressure.",
        meta: "18 joined · 6 comments",
    },
    {
        name: "Daniel",
        tag: "Buddy match",
        time: "4h",
        text: "Met my language partner for coffee today. First full conversation in French.",
        meta: "24 likes · 9 comments",
    },
    {
        name: "Mina",
        tag: "Study circle",
        time: "1d",
        text: "Created a small WhatsApp subgroup for ENGR students going to the museum event.",
        meta: "12 replies · 4 shares",
    },
];

export default function ENGR392Page() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(244,114,182,0.14),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(251,146,60,0.14),_transparent_24%)]"/>

            <div className="flex flex-col gap-16 px-4 py-12 lg:px-0 lg:py-16">
                <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,20,38,0.96),rgba(14,31,56,0.92))] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:px-10 lg:py-10">
                    <div className="absolute -left-20 top-12 h-48 w-48 rounded-full bg-[#38bdf8]/15 blur-3xl"/>
                    <div className="absolute -right-12 top-0 h-56 w-56 rounded-full bg-[#f472b6]/15 blur-3xl"/>
                    <div className="absolute bottom-0 right-16 h-44 w-44 rounded-full bg-[#fb923c]/15 blur-3xl"/>

                    <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        <div className="flex flex-col gap-6">
                            <div className="flex w-fit items-center gap-2 rounded-full border border-[#7dd3fc]/20 bg-[#0f1d33] px-3 py-1 text-sm text-[#9bdaf7]">
                                <Sparkles size={14}/>
                                <span>{"ENGR 392 Proposal"}</span>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h1 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.03em] lg:text-6xl">
                                    {"Allô Connect"}
                                </h1>
                                <p className="max-w-2xl text-lg leading-8 text-white/70 lg:text-xl">
                                    {
                                        "A social platform designed to help non-French-speaking international students in Quebec build real friendships, practice French naturally, and feel part of the local community."
                                    }
                                </p>
                            </div>

                            <div className="grid gap-3 text-sm text-white/70 lg:grid-cols-3">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="mb-1 text-xs uppercase tracking-[0.24em] text-[#7dd3fc]">Goal</p>
                                    <p>{"Turn passive scrolling into active belonging."}</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="mb-1 text-xs uppercase tracking-[0.24em] text-[#f9a8d4]">Audience</p>
                                    <p>{"International students navigating Quebec life and language."}</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="mb-1 text-xs uppercase tracking-[0.24em] text-[#fdba74]">Approach</p>
                                    <p>{"Mix in-person events with familiar social communication patterns."}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto w-full max-w-[360px] rounded-[2rem] border border-white/10 bg-[#091321]/80 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
                            <div className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,26,46,1),rgba(8,15,28,1))] p-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium">{"For you"}</p>
                                        <p className="text-xs text-white/45">{"Campus social feed"}</p>
                                    </div>
                                    <div className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/60">
                                        {"Allô Connect"}
                                    </div>
                                </div>

                                <div className="mb-4 rounded-2xl border border-[#7dd3fc]/20 bg-[linear-gradient(135deg,rgba(56,189,248,0.16),rgba(244,114,182,0.1))] p-4">
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                                                <Camera size={16}/>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">{"Saturday city walk"}</p>
                                                <p className="text-xs text-white/55">{"Hosted by local ambassadors"}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-white/50">{"Open"}</span>
                                    </div>
                                    <p className="text-sm leading-6 text-white/75">
                                        {"Explore Montreal, practice French casually, and meet students before the semester feels overwhelming."}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {feedItems.map((item) => (
                                        <div
                                            key={`${item.name}-${item.time}`}
                                            className="rounded-2xl border border-white/8 bg-white/[0.04] p-4"
                                        >
                                            <div className="mb-2 flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="text-sm font-medium">{item.name}</p>
                                                    <p className="text-xs text-white/45">{item.tag}</p>
                                                </div>
                                                <span className="text-xs text-white/35">{item.time}</span>
                                            </div>
                                            <p className="mb-3 text-sm leading-6 text-white/72">{item.text}</p>
                                            <p className="text-xs text-white/40">{item.meta}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6">
                        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#7dd3fc]">The problem</p>
                        <p className="text-lg leading-8 text-white/76">
                            {
                                "Students can be constantly online and still feel excluded. Social platforms make communication easy, but they do not automatically create trust, cultural familiarity, or a sense of belonging."
                            }
                        </p>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6">
                        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#f9a8d4]">The idea</p>
                        <p className="text-lg leading-8 text-white/76">
                            {
                                "Allô Connect combines local matching, recurring activities, language support, and social sharing so students can meet offline and keep momentum online."
                            }
                        </p>
                    </div>
                </section>

                <section className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm uppercase tracking-[0.22em] text-[#fdba74]">Platform features</p>
                        <h2 className="text-2xl font-medium tracking-[-0.02em] lg:text-3xl">
                            {"Built to feel familiar, but more intentional than a typical social app."}
                        </h2>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <article
                                    key={feature.title}
                                    className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a1525] p-6"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.tone} opacity-80 transition-opacity duration-200 group-hover:opacity-100`}/>
                                    <div className="relative">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                                            <Icon size={20}/>
                                        </div>
                                        <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
                                        <p className="leading-7 text-white/68">{feature.description}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1525] p-6">
                        <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[#7dd3fc]">What students do</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#38bdf8]/10 text-[#7dd3fc]">
                                    <Users size={16}/>
                                </div>
                                <div>
                                    <p className="font-medium">{"Get matched"}</p>
                                    <p className="text-sm leading-6 text-white/62">{"Find a buddy and small groups that fit your comfort level."}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#f472b6]/10 text-[#f9a8d4]">
                                    <MapPin size={16}/>
                                </div>
                                <div>
                                    <p className="font-medium">{"Show up offline"}</p>
                                    <p className="text-sm leading-6 text-white/62">{"Join events that make Quebec culture and campus life easier to enter."}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#fb923c]/10 text-[#fdba74]">
                                    <Compass size={16}/>
                                </div>
                                <div>
                                    <p className="font-medium">{"Stay connected"}</p>
                                    <p className="text-sm leading-6 text-white/62">{"Keep conversations alive through posts, comments, and subgroup chats."}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),rgba(244,114,182,0.08),rgba(251,146,60,0.08))] p-6">
                        <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[#f9a8d4]">Why this matters</p>
                        <p className="mb-4 text-lg leading-8 text-white/76">
                            {
                                "The proposal is not trying to replace existing platforms. It uses the habits students already have, but redirects them toward more meaningful interaction, better integration, and stronger social support."
                            }
                        </p>
                        <div className="grid gap-3 sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/45">Belonging</p>
                                <p className="text-sm text-white/72">{"Build real connections instead of surface-level contact."}</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/45">Language</p>
                                <p className="text-sm text-white/72">{"Practice French in social settings with lower pressure."}</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/45">Community</p>
                                <p className="text-sm text-white/72">{"Help students feel welcomed into Quebec campus life."}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
