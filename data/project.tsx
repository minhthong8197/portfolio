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
      "As the solo founder, I single-handedly took a relaxing puzzle game from concept to a complete, live product. This involved building a custom puzzle-generation engine and engineering a high-performance graphics system. The project showcases my ability to manage the entire product lifecycle and leverage AI as a creative partner while applying deep expertise to solve complex challenges.",
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
      "To serve a gaming community, I built a data analysis tool that interfaces with a legacy SOAP/XML API. I engineered a modern adapter layer to transform the data, re-architected the entire application to Deno/Fresh for improved performance, and implemented an intelligent pre-fetching strategy. This delivered a seamless user experience, turning the project into a stable, live product.",
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
      "As a founding engineer and later team lead, I co-architected and built a robust Hospital Information System (HIS) from the ground up using a microservices architecture. The solution proved its resilience by successfully processing thousands of daily COVID-19 tests at peak times, and its architecture became the official blueprint for all subsequent large-scale company projects.",
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
      "Tasked with rapidly extending an e-commerce platform to mobile, I researched and pioneered the implementation of a universal app architecture. By leveraging a monorepo with Next.js, Expo, and Tamagui, I architected the solution for maximum code sharing and established an automated CI/CD pipeline, laying a scalable foundation for future cross-platform development.",
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
      "I helped a real estate investment firm digitize their entire paper-based operational workflow. I quickly adapted to a new tech stack, including Hapi.js and PostgreSQL, to develop a secure, dual-application microservices system for both internal staff and external partners. This project demonstrated my ability to deliver value rapidly while seamlessly integrating into a highly structured Agile/Scrum environment.",
    tags: ["React", "Redux", "Hapi.js", "PostgreSQL", "AWS S3", "Microservices", "Agile/Scrum", "Jira", "RESTful API", "Database Migration", "Code Review"],
    displayTags: ["React", "Redux", "Hapi.js", "PostgreSQL", "AWS S3"],
    imageCard: "/project-real-estate.jpg",
    imageStory: "/project-real-estate-architecture.jpg",
    seoDescription:
      "Explore the case study of digitizing a real estate investment firm. This story details my experience building a microservices platform with React, Redux, Hapi.js, and PostgreSQL in a professional Agile/Scrum environment.",
  },
];
