// app/components/Contact.tsx
import { Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-4xl py-24 text-center">
      <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
      <p className="text-lg text-gray-600 mb-8">I'm currently open to new opportunities. Feel free to connect with me on LinkedIn.</p>
      <a
        href="https://www.linkedin.com/in/thong-stephen-nguyen/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
      >
        <Linkedin size={24} />
        Connect on LinkedIn
      </a>
    </section>
  );
};

export default Contact;
