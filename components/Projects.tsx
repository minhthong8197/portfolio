// components/Projects.tsx
"use client";

import Image from "next/image";
import { BookOpen, ChevronsDown, ChevronsUp, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { projects } from "../data/project";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="w-full max-w-6xl py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Projects & Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {visibleProjects.map((project) => (
          <div key={project.name} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-56 bg-gray-200">
              <Image src={project.imageCard} alt={project.name} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-grow">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="text-gray-600 flex-grow">{project.description}</p>
              {/* row for tags */}
              <div className="flex flex-wrap gap-2">
                {project.displayTags.map((tag) => (
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

      {projects.length > 4 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-300"
          >
            {showAll ? (
              <>
                <ChevronsUp size={20} />
                Show Less
              </>
            ) : (
              <>
                <ChevronsDown size={20} />
                Show More
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
