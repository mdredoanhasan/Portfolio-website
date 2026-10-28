import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';

const ProjectSection = () => {
    return (
        <section id="projects" className="scroll-mt-20 bg-[#0a0a0f] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                    Portfolio
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Featured Projects
                </h2>

                <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11111a] p-3 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 sm:p-4"
                        >
                            <div className="relative h-48 w-full overflow-hidden rounded-xl">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                                <p className="text-xs font-medium text-cyan-300">
                                    {project.techStack.join(' · ')}
                                </p>

                                <h3 className="mt-3 text-lg font-semibold text-white">
                                    {project.name}
                                </h3>

                                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-400">
                                    {project.description}
                                </p>

                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                                >
                                    View Details →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;