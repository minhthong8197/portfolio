// components/Experience.tsx

import { CheckCircle2 } from "lucide-react";

const experience = [
  {
    company: "Personal Projects (Founder & Solo Developer)",
    role: "Independent Product Developer",
    period: "October 2024 - Present",
    intro:
      "After 5+ years of dedicated professional growth, I took a planned career break to pursue independent product development. This period was focused on building full-stack applications from concept to market, exploring human-AI collaboration, and deepening my expertise in modern web technologies.",
    achievements: [
      "Launched Steevy Indie: A mindfulness-focused puzzle game, single-handedly managing the entire product lifecycle from ideation, UI/UX design, and development to deployment, SEO, and marketing.",
      "Re-architected HTEco: Migrated a full-stack application from a traditional React/NestJS stack to a modern Deno/Fresh architecture, solving complex legacy API integration challenges.",
      "Mastered End-to-End Product Ownership: Gained hands-on experience in market research, product strategy, user analytics, and building automated content creation tools.",
      "Deepened Technical Skills: Advanced my proficiency in React, Next.js, Deno, system design, and building high-performance, user-centric interfaces.",
    ],
  },
  {
    company: "Sunny Development",
    role: "Full-stack Developer",
    period: "Mar 2019 - Oct 2024 (5 years 7 months)",
    intro:
      "Played a key role in the company's growth over 5+ years, contributing to a wide range of internal and client-facing projects. My responsibilities evolved to include system architecture, team leadership, and pioneering new technologies.",
    achievements: [
      "Architected Core Systems: Co-designed and developed the foundational microservices codebase that became the successful blueprint for subsequent company-wide platforms.",
      "Led a Development Team: Led the team responsible for the critical Authentication & Authorization module, providing technical leadership and supporting other developers.",
      "Engineered Complex Integrations: Successfully bridged modern RESTful services with legacy SOAP APIs to ensure seamless data flow for enterprise clients like Kidzania.",
      "Pioneered Cross-Platform Solutions: Spearheaded the company's adoption of modern architectures by independently developing a cross-platform e-commerce app using a Monorepo.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full max-w-4xl py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
      <div className="relative border-l-2 border-gray-200">
        {experience.map((job, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
              <svg className="w-3 h-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">
              {job.role} <span className="text-blue-600 ml-3">@ {job.company}</span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{job.period}</time>

            <p className="mb-4 text-base font-normal text-gray-600">{job.intro}</p>
            <ul className="space-y-4 text-base text-gray-600 list-none">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
