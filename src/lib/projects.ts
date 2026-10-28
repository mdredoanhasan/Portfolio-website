import projectData from "../../public/data.json";

export interface Project {
    id: number;
    slug: string;
    name: string;
    image: string;
    techStack: string[];
    description: string;
    liveLink: string;
    githubClient: string;
    challenges: string[];
    futureImprovements: string[];
}

export const projects = projectData satisfies Project[];
