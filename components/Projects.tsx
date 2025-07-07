// app/components/Projects.tsx
import Image from "next/image";
import { BookOpen, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export const projects: {
  name: string;
  description: string;
  tags: string[];
  imageCard: string;
  imageStory?: string;
  liveUrl?: string;
  githubUrl?: string;
  slug?: string;
  storyTitle?: string;
  seoDescription?: string;
}[] = [
  {
    name: "Steevy Indie",
    slug: "steevy-indie-journey",
    storyTitle: "Steevy Indie: A Solo Founder's Journey in Creative Coding & AI",
    description:
      "Independently managed the entire product lifecycle, from initial concept of a relaxing puzzle game to a live application with 90+ puzzles. I built a custom SVG puzzle-generation tool and leveraged AI for development assistance and content creation. The project was deployed on Cloudflare Pages, with a strong focus on SEO and user analytics integration.",
    tags: ["Next.js", "React", "Tailwind CSS", "AI"],
    imageCard: "/project-steevy.jpg",
    imageStory: "/project-steevy-story.jpg",
    liveUrl: "https://steevyindie.com",
    seoDescription: "Explore the development story of Steevy Indie, a unique online dot-to-dot puzzle game built with Next.js, React, and AI.",
  },
  {
    name: "HTEco",
    slug: "hteco-data-toolkit",
    storyTitle: "HTEco: A Data Toolkit for Hattrick, Evolved Over Two Years",
    description:
      "A specialized tool for the Hattrick gaming community. The core challenge was building a modern middleware in Deno to transform a legacy SOAP/XML API into a clean, usable data source. The frontend, built with Fresh/Preact and various UI libraries, served as an R&D project to master new technologies and advanced data visualization.",
    tags: ["Deno", "Fresh", "Preact", "Tailwind CSS", "DigitalOcean"],
    imageCard: "/project-hteco.jpg",
    imageStory: "/project-hteco-story.jpg",
    liveUrl: "https://hteco.net",
    seoDescription: "Read the case study of HTEco, a tool for Hattrick, demonstrating API modernization with Deno, Fresh, and robust data visualization.",
  },
  {
    name: "Hospital Information System (HIS)",
    slug: "his-scalable-microservices",
    storyTitle: "HIS: Architecting a Scalable Microservices System for Healthcare",
    description:
      "Co-architected and developed the foundational microservices codebase for a large-scale Hospital Information System. I led the development of the critical Authentication & Authorization module. This robust and scalable architecture became the successful blueprint for subsequent major company projects, including school management and e-commerce platforms.",
    tags: ["Microservices", "NestJS", "React", "Team Leadership", "System Design"],
    imageCard: "/project-his-architecture.jpg",
    imageStory: "/project-his-story.jpg",
    seoDescription:
      "Deep dive into the architecture and challenges of building a high-volume Hospital Information System with Microservices, NestJS, and React.",
  },
  {
    name: "E-commerce Cross-platform App",
    slug: "",
    description:
      "As the sole developer, I spearheaded the creation of a universal e-commerce application. By architecting a monorepo with Tamagui and Solito, the project achieved maximum code sharing between web (Next.js) and mobile (React Native/Expo), significantly accelerating development time and ensuring brand consistency across platforms.",
    tags: ["React Native", "Next.js", "Tamagui", "Monorepo", "Code Sharing"],
    imageCard: "/project-monorepo-structure.jpg",
    imageStory: "/project-monorepo-structure.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-6xl py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Projects & Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.name} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-56 bg-gray-200">
              <Image src={project.imageCard} alt={project.name} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-grow">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="text-gray-600 flex-grow">{project.description}</p>
              {/* row for tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              {/* row for link */}
              {(project.liveUrl || project.githubUrl || project.slug) && (
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                    >
                      <ExternalLink size={18} /> Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                    >
                      <Github size={18} /> View Code
                    </a>
                  )}
                  {project.slug && (
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                      <BookOpen size={18} /> Read Story
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
