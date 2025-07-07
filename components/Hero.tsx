// components/Hero.tsx
import { Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">Nguyen Minh Thong (Stephen)</h1>
      <p className="mt-4 text-xl sm:text-2xl text-gray-600">Full-stack Developer</p>
      <p className="mt-6 max-w-3xl text-gray-500">I build software like a digital gardener: with care, precision, and a focus on long-term growth.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/thong-stephen-nguyen/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          <Linkedin size={20} />
          Connect on LinkedIn
        </a>
        <a
          href="https://github.com/minhthong8197"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <Github size={20} />
          View My GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
