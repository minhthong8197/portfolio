// app/components/Skills.tsx
import { Code, Database, Server, Settings } from "lucide-react";

const skills = {
  frontend: ["React", "Next.js", "Tailwind CSS", "React Native"],
  backend: ["Node.js", "NestJS", "GraphQL", "Hapi.js"],
  databases: ["MongoDB", "PostgreSQL", "MariaDB", "Redis"],
  tools: ["Docker", "CI/CD", "Nginx", "DigitalOcean"],
};

const SkillCategory = ({ title, items, icon: Icon }: { title: string; items: string[]; icon: React.ElementType }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center gap-4 mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-gray-600">
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
        <SkillCategory title="Frontend" items={skills.frontend} icon={Code} />
        <SkillCategory title="Backend" items={skills.backend} icon={Server} />
        <SkillCategory title="Databases" items={skills.databases} icon={Database} />
        <SkillCategory title="Tools & DevOps" items={skills.tools} icon={Settings} />
      </div>
    </section>
  );
};

export default Skills;
