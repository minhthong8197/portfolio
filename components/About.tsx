// app/components/About.tsx
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="w-full max-w-4xl py-24">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 md:w-60 md:h-60 relative flex-shrink-0">
          <Image src="/avatar.jpg" alt="Stephen Nguyen" fill className="rounded-full object-cover" />
        </div>
        <div className="text-lg text-gray-700 space-y-4 text-center md:text-left">
          <p>
            {`I'm a Full-stack Developer with over 5 years of experience, specializing in the JavaScript/TypeScript ecosystem. My passion lies in building
            high-performance applications with a strong focus on code quality and user experience.`}
          </p>
          <p>
            With a keen eye for detail, I enjoy identifying and resolving potential issues and technical debt, ensuring that the products I build are both
            stable and scalable. I love to dive deep into a product to deliver long-term value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
