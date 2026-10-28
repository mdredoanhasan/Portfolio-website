"use client";

import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { useContactModal } from "./contactModal";

const skills = ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB"];

const BannerPage = () => {
    const openContactModal = useContactModal();

    return (
        <section
            id="home"
            className="relative isolate overflow-hidden bg-[#0a0a0f] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-violet-700/15 blur-[120px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
            />
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-300 sm:text-sm">
                        <GoDotFill className="text-emerald-400" aria-hidden="true" />
                        Available for freelance work
                    </span>
                    <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
                        Building fast, scalable web products from{" "}
                        <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                            database to pixel.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                        Hi, I&apos;m Redoan, a full-stack developer crafting performant
                        apps with React, Node.js, and cloud-native tooling. I turn complex
                        problems into clean, reliable products.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/#projects"
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                            View my work <span className="ml-2" aria-hidden="true">→</span>
                        </Link>
                        <button
                            type="button"
                            onClick={openContactModal}
                            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                            Hire me
                        </button>
                    </div>

                    <ul className="mt-10 flex flex-wrap gap-2" aria-label="Technologies">
                        {skills.map((skill) => (
                            <li
                                key={skill}
                                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-gray-300 sm:text-sm"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                    <div
                        aria-hidden="true"
                        className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-600/45 via-violet-500/20 to-cyan-400/40 blur-3xl"
                    />
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.01] p-3 shadow-2xl shadow-violet-950/30">
                        <Image
                            src="/(Image)/banner.png"
                            alt="Portrait of Redoan Hasan"
                            fill
                            priority
                            sizes="(max-width: 1024px) 80vw, 390px"
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerPage;
