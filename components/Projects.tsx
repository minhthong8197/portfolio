// app/components/Projects.tsx
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects: {
  name: string;
  description: string;
  tags: string[];
  image: string; // Đường dẫn đến ảnh dự án
  liveUrl?: string; // Link đến bản demo trực tuyến (nếu có)
  githubUrl?: string; // Link đến mã nguồn trên GitHub (nếu có)
}[] = [
  {
    name: "Steevy Indie",
    description:
      "Independently managed the entire product lifecycle, from initial concept of a relaxing puzzle game to a live application with 90+ puzzles. I built a custom SVG puzzle-generation tool and leveraged AI for development assistance and content creation. The project was deployed on Cloudflare Pages, with a strong focus on SEO and user analytics integration.",
    tags: ["Next.js", "React", "Tailwind CSS", "AI"],
    image: "/project-steevy.jpg", // <-- THAY ẢNH DỰ ÁN
    liveUrl: "https://steevyindie.com",
  },
  {
    name: "HTEco",
    description:
      "A specialized tool for the Hattrick gaming community. The core challenge was building a modern middleware in Deno to transform a legacy SOAP/XML API into a clean, usable data source. The frontend, built with Fresh/Preact and various UI libraries, served as an R&D project to master new technologies and advanced data visualization.",
    tags: ["Deno", "Fresh", "Preact", "Tailwind CSS", "DigitalOcean"],
    image: "/project-hteco.jpg", // <-- THAY ẢNH DỰ ÁN
    liveUrl: "https://hteco.net",
  },
  {
    name: "Hospital Information System (HIS)",
    description:
      "Co-architected and developed the foundational microservices codebase for a large-scale Hospital Information System. I led the development of the critical Authentication & Authorization module. This robust and scalable architecture became the successful blueprint for subsequent major company projects, including school management and e-commerce platforms.",
    tags: ["Microservices", "NestJS", "React", "Team Leadership", "System Design"],
    image: "/project-his-architecture.jpg", // <-- Ảnh sơ đồ kiến trúc
    // Không có liveUrl và githubUrl
  },
  {
    name: "E-commerce Cross-platform App",
    description:
      "As the sole developer, I spearheaded the creation of a universal e-commerce application. By architecting a monorepo with Tamagui and Solito, the project achieved maximum code sharing between web (Next.js) and mobile (React Native/Expo), significantly accelerating development time and ensuring brand consistency across platforms.",
    tags: ["React Native", "Next.js", "Tamagui", "Monorepo", "Code Sharing"],
    image: "/project-monorepo-structure.jpg", // <-- Ảnh sơ đồ monorepo
    // Không có liveUrl và githubUrl
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
              <Image src={project.image} alt={project.name} fill className="object-cover" />
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
              {(project.liveUrl || project.githubUrl) && (
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
