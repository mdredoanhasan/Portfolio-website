import Image from 'next/image';

const skills = [
    {
        title: 'Frontend',
        icon: '/(Image)/FrontEnd.png',
        iconBg: 'bg-violet-500/15',
        lines: ['React · Next.js · TypeScript', 'Tailwind CSS · HeroUI · Material UI'],
    },
    {
        title: 'Backend',
        icon: '/(Image)/Backend.png',
        iconBg: 'bg-cyan-400/15',
        lines: ['Node.js · Express · NestJS', 'REST · GraphQL · WebSockets'],
    },
    {
        title: 'Databases',
        icon: '/(Image)/Database.png',
        iconBg: 'bg-violet-500/15',
        lines: ['PostgreSQL · MongoDB', 'Redis · Prisma · Supabase'],
    },
];

const SkillSection = () => {
    return (
        <section className="bg-[#0a0a0f] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                    What I do
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Skills &amp; Expertise
                </h2>

                <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
                    {skills.map((skill) => (
                        <div
                            key={skill.title}
                            className="grid grid-cols-[0.8fr_1.2fr] overflow-hidden rounded-2xl border border-white/10 bg-[#11111a] transition hover:-translate-y-1 hover:border-violet-500/40"
                        >
                            <div
                                className={`flex items-center justify-center p-4 sm:p-6 ${skill.iconBg}`}
                            >
                                <Image
                                    src={skill.icon}
                                    alt={`${skill.title} icon`}
                                    width={132}
                                    height={108}
                                    className="h-auto w-full max-w-32 object-contain"
                                />
                            </div>

                            <div className="flex flex-col justify-center p-4 sm:p-6">
                                <h3 className="text-base font-semibold text-white sm:text-lg">
                                    {skill.title}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:mt-3 sm:text-sm">
                                    {skill.lines[0]}
                                    <br />
                                    {skill.lines[1]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillSection;