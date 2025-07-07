export const projects: {
  name: string;
  description: string;
  tags: string[];
  displayTags: string[];
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
    tags: ["Next.js", "React", "Tailwind CSS", "Vibe Coding", "SEO", "UI/UX Design", "Framer Motion", "SVG", "Web Audio API", "Deployment"],
    displayTags: ["Next.js", "React", "Tailwind CSS", "AI"],
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
    tags: [
      "Deno",
      "Fresh",
      "Preact",
      "NestJS",
      "React",
      "Tailwind CSS",
      "API Integration",
      "SOAP",
      "XML",
      "OAuth",
      "Data Transformation",
      "Data Visualization",
      "DigitalOcean",
      "Nginx",
      "Re-architecture",
    ],
    displayTags: ["Deno", "Fresh", "Preact", "Tailwind CSS", "DigitalOcean"],
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
    tags: [
      "Microservices",
      "System Design",
      "Architecture",
      "NestJS",
      "React",
      "GraphQL",
      "MongoDB",
      "TypeScript",
      "Team Leadership",
      "Database Design",
      "Docker",
      "GitLab CI/CD",
      "Containerization",
    ],
    displayTags: ["Microservices", "NestJS", "GraphQL", "React", "Team Leadership"],
    imageCard: "/project-his-architecture.jpg",
    imageStory: "/project-his-story.jpg",
    seoDescription:
      "Deep dive into the architecture and challenges of building a high-volume Hospital Information System with Microservices, NestJS, and React.",
  },
  {
    name: "E-commerce Cross-platform App",
    slug: "ecommerce-cross-platform-app",
    storyTitle: "Building a Universal E-commerce App with Monorepo",
    description:
      "Spearheaded the research and development of a universal e-commerce application. By designing a monorepo architecture with Tamagui and Solito, I maximized code sharing between web (Next.js) and mobile (React Native/Expo), significantly accelerating development and ensuring consistent user experience.",
    tags: [
      "React Native",
      "Next.js",
      "Tamagui",
      "Monorepo",
      "Code Sharing",
      "GraphQL",
      "Tailwind CSS",
      "Formik",
      "Cross-platform Development",
      "E-commerce Development",
      "Mobile Development",
      "Web Development",
    ],
    displayTags: ["React Native", "Next.js", "Tamagui", "Monorepo", "Code Sharing"],
    imageCard: "/project-monorepo-structure.jpg",
    imageStory: "/project-monorepo-structure.jpg",
    seoDescription:
      "Explore the technical journey of building a cross-platform e-commerce application using Next.js, React Native, Tamagui, and a monorepo approach for maximum code reuse.",
  },
  {
    name: "Real Estate Process Digitization",
    slug: "real-estate-digitization",
    storyTitle: "Digitizing Real Estate Investment: A Deep Dive into a New Tech Stack & Agile Process",
    description:
      "As an outsourced developer, I helped a real estate investment firm transition their paper-based operations to a modern digital platform. I developed features across a new tech stack (React, Redux, Hapi.js, PostgreSQL) and operated within a structured Scrum environment to build a robust, dual-application system.",
    tags: ["React", "Redux", "Hapi.js", "PostgreSQL", "AWS S3", "Microservices", "Agile/Scrum", "Jira", "RESTful API", "Database Migration", "Code Review"],
    displayTags: ["React", "Redux", "Hapi.js", "PostgreSQL", "AWS S3"],
    imageCard: "/project-real-estate.jpg",
    imageStory: "/project-real-estate-story.jpg",
    seoDescription:
      "Explore the case study of digitizing a real estate investment firm. This story details my experience building a microservices platform with React, Redux, Hapi.js, and PostgreSQL in a professional Agile/Scrum environment.",
  },
];
