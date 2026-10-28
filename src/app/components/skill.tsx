import Image from 'next/image';

type Skill = {
    title: string;
    icon?: string;
    iconBg: string;
    tags: string[];
};

const skills: Skill[] = [
    {
        title: 'Frontend',
        icon: '/(Image)/FrontEnd.png',
        iconBg: 'bg-violet-500/15',
        tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        icon: '/(Image)/Backend.png',
        iconBg: 'bg-cyan-400/15',
        tags: ['Node.js', 'Express', 'REST APIs'],
    },
    {
        title: 'Databases',
        icon: '/(Image)/Database.png',
        iconBg: 'bg-violet-500/15',
        tags: ['MongoDB'],
    },
    {
        title: 'Tools',
        iconBg: 'bg-cyan-400/15',
        tags: ['Git', 'GitHub', 'Vercel'],
    },
];

const ToolsIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-20 w-20 text-cyan-300"
    >
        <path d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
);

const SkillSection = () => {
    return (
        <section
            id="skills"
            className="scroll-mt-20 bg-[#0a0a0f] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                    What I do
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Skills &amp; Expertise
                </h2>

                <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
                    {skills.map((skill) => (
                        <div
                            key={skill.title}
                            className="grid grid-cols-[0.8fr_1.2fr] overflow-hidden rounded-2xl border border-white/10 bg-[#11111a] transition hover:-translate-y-1 hover:border-violet-500/40"
                        >
                            <div
                                className={`flex items-center justify-center p-4 sm:p-6 ${skill.iconBg}`}
                            >
                                {skill.icon ? (
                                    <Image
                                        src={skill.icon}
                                        alt={`${skill.title} icon`}
                                        width={132}
                                        height={108}
                                        className="h-auto w-full max-w-32 object-contain"
                                    />
                                ) : (
                                    <ToolsIcon />
                                )}
                            </div>

                            <div className="flex flex-col justify-center p-4 sm:p-6">
                                <h3 className="text-base font-semibold text-white sm:text-lg">
                                    {skill.title}
                                </h3>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {skill.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 sm:text-sm"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillSection;