// components/Skills.tsx

import { Code, Server, Layers, CloudCog } from "lucide-react";

const skillData = [
  {
    title: "Core: Frontend & Mobile",
    description: "Building responsive, high-performance UIs with a focus on modern frameworks and cross-platform consistency.",
    icon: Code,
    items: ["React & Next.js", "TypeScript", "React Native", "Tailwind CSS & SCSS", "Framer Motion", "Tamagui & Solito"],
  },
  {
    title: "Core: Backend & Databases",
    description: "Developing robust APIs and designing data models for scalable, data-intensive applications.",
    icon: Server,
    items: ["Node.js & NestJS", "GraphQL (Apollo)", "MongoDB (Mongoose)", "PostgreSQL (TypeORM)", "Redis", "Hapi.js"],
  },
  {
    title: "System Architecture",
    description: "Designing resilient and maintainable systems from the ground up to meet complex business requirements.",
    icon: Layers,
    items: ["Microservices", "Universal Apps (Monorepo)", "REST & GraphQL APIs", "Server-Side Rendering (SSR)", "Data-intensive Design"],
  },
  {
    title: "DevOps & Cloud",
    description: "Automating workflows and deploying applications on modern cloud infrastructure for reliability and speed.",
    icon: CloudCog,
    items: ["Docker", "GitLab CI", "NGINX & Portainer", "Vercel", "AWS S3", "DigitalOcean"],
  },
];

const SkillCategory = ({ title, description, items, icon: Icon }: { title: string; description: string; items: string[]; icon: React.ElementType }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
    <div className="flex items-center gap-4 mb-3">
      <Icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-500 mb-4 text-sm flex-grow">{description}</p>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-gray-700 font-medium">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="w-full max-w-6xl py-24">
      <h2 className="text-3xl font-bold text-center mb-12">My Tech Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillData.map((category) => (
          <SkillCategory key={category.title} title={category.title} description={category.description} items={category.items} icon={category.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
