import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return projects.map(({ slug }) => ({ slug }));
}

const isConfiguredLink = (url: string) =>
    url.startsWith('https://') && !url.includes('[');

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0f] px-4 py-14 text-white">
            <article className="container mx-auto max-w-4xl">
                <Link
                    href="/#projects"
                    className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                >
                    ← Back to projects
                </Link>

                <div className="relative mt-6 h-64 overflow-hidden rounded-2xl border border-white/10 sm:h-96">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 896px"
                        className="object-cover"
                    />
                </div>

                <header className="mt-8">
                    <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                        Featured project
                    </p>
                    <h1 className="mt-2 text-3xl font-bold md:text-5xl">
                        {project.name}
                    </h1>
                    <p className="mt-4 leading-relaxed text-gray-300">
                        {project.description}
                    </p>
                </header>

                <section className="mt-8 rounded-2xl border border-white/10 bg-[#13131d] p-6">
                    <h2 className="text-xl font-semibold">Technology stack</h2>
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.map((technology) => (
                            <li
                                key={technology}
                                className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-200"
                            >
                                {technology}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-[#13131d] p-6">
                        <h2 className="text-xl font-semibold">Project links</h2>
                        <div className="mt-4 flex flex-col items-start gap-3 text-sm">
                            {isConfiguredLink(project.liveLink) ? (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 transition hover:text-cyan-300"
                                >
                                    View live project →
                                </a>
                            ) : (
                                <p className="text-gray-400">
                                    Live project link not added yet
                                </p>
                            )}
                            {isConfiguredLink(project.githubClient) ? (
                                <a
                                    href={project.githubClient}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 transition hover:text-cyan-300"
                                >
                                    Client repository →
                                </a>
                            ) : (
                                <p className="text-gray-400">
                                    Client repository link not added yet
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#13131d] p-6">
                        <h2 className="text-xl font-semibold">
                            Challenges faced
                        </h2>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
                            {project.challenges.map((challenge) => (
                                <li key={challenge}>{challenge}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="mt-6 rounded-2xl border border-white/10 bg-[#13131d] p-6">
                    <h2 className="text-xl font-semibold">
                        Future improvements and plans
                    </h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
                        {project.futureImprovements.map((improvement) => (
                            <li key={improvement}>{improvement}</li>
                        ))}
                    </ul>
                </section>
            </article>
        </main>
    );
}
