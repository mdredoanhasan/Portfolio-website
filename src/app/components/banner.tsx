"use client";

import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
];

const BannerPage = () => {

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
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-medium text-gray-300 sm:text-sm">
                        <GoDotFill className="text-emerald-400" aria-hidden="true" />
                        Available for freelance work
                    </span>
                    <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
                        Building fast, scalable web products from{" "}
                        <span className="bg-linear-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
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
                            className="cta-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
                        >
                            View my work <span aria-hidden="true">↗</span>
                        </Link>
                        <button
                            type="button"
                            className="cta-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
                        >
                            Resume
                        </button>
                    </div>

                    <ul className="mt-10 flex flex-wrap gap-2" aria-label="Technologies">
                        {skills.map((skill) => (
                            <li
                                key={skill}
                                className="rounded-full border border-white/10 bg-white/3 px-3.5 py-2 text-xs text-gray-300 sm:text-sm"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative mx-auto w-full max-w-107.5 lg:max-w-none">
                    <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-[42%] h-[62%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(170,116,255,0.3)_0%,rgba(89,210,220,0.15)_48%,transparent_76%)] blur-2xl"
                    />
                    <div className="relative mx-auto aspect-2/3 w-full">
                        <Image
                            src="/(Image)/banner.png"
                            alt="Portrait of Redoan Hasan"
                            fill
                            priority
                            sizes="(max-width: 1024px) 80vw, 430px"
                            className="object-contain object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerPage;
