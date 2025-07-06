// components/stories/SteevyIndieStory.tsx

const SteevyIndieStory = () => {
  return (
    <>
      <p>
        After five years of dedicated company work since graduation, I took a leap of faith. Instead of seeking a new job, I embarked on a{" "}
        <strong>{`solo founder's journey`}</strong>. Fueled by the rise of AI and a desire to build something I could truly cherish, I decided to create Steevy
        Indie.
      </p>

      <h3>A Quest for Calm in a World of Chaos</h3>
      <p>
        I saw the internet flooded with low-value, AI-generated viral content. My vision was the opposite: to create a digital sanctuary. I wanted to build a
        product that offered <strong>a moment of peace and mindfulness</strong>. This led to the idea of a dot-to-dot puzzle game, reimagined with a focus on
        visual recognition and a deeply relaxing user experience.
      </p>

      <h3>The Art of Human-AI Collaboration</h3>
      <p>
        This project was an experiment in <strong>{`"vibe coding"`}</strong>—a deep, collaborative partnership with AI from start to finish. However, it also
        became a case study in knowing when human expertise must take the lead.
      </p>

      <ol>
        <li>
          <strong>Building the Puzzle Creation Engine</strong>
          <p>
            My first step was creating a custom <strong>React-based tool</strong> to process geometric art (assisted by AI) into playable SVG puzzles. This tool{" "}
            {`wasn't`} just a simple converter; it allowed me to:
          </p>
          <ul>
            <li>Analyze line lengths and angles to ensure puzzle solvability.</li>
            <li>Programmatically straighten imperfect lines.</li>
            <li>Most importantly, it processed the SVGs to leave only the endpoints, forming the core puzzle mechanic.</li>
          </ul>
        </li>
        <li>
          <strong>Engineering a Polished, High-Performance Experience</strong>
          <p>Bringing the puzzles to life in the main application presented significant performance challenges that AI alone {`couldn't`} solve.</p>
          <ul>
            <li>
              <strong>The Graphics Engine:</strong> I implemented zooming, panning, and a fluid drawing animation system. When AI struggled with precise
              coordinate calculations under combined zoom/pan states, <strong>I had to manually debug and architect the state management logic</strong> for a
              pixel-perfect, buttery-smooth interaction. I integrated <strong>Framer Motion</strong> for professional-grade animations that {`AI's`} initial
              code {`couldn't`} replicate effectively.
            </li>
            <li>
              <strong>The Audio Experience:</strong> I used AI to generate a library of relaxing ambient music, but that was just the start. I carefully curated
              and post-produced the tracks for consistent volume and small file sizes. While AI helped me quickly grasp the{" "}
              <strong>{`Browser's`} Audio Context API</strong>, its solutions for performance were inadequate. I personally re-engineered the audio-loading
              strategy, implementing pre-fetching and decoupling it from the main rendering loop to ensure sound never impacted the {`app's`} performance.
            </li>
          </ul>
        </li>
      </ol>

      <h3>From MVP to a Complete Product Ecosystem</h3>
      <p>
        I successfully managed the <strong>entire product lifecycle</strong>, turning an idea into a live application featuring:
      </p>
      <ul>
        <li>
          A library of over <strong>90 handcrafted puzzles</strong>.
        </li>
        <li>Features like downloading completed artwork.</li>
        <li>Continuous UI/UX improvements based on user feedback.</li>
        <li>
          Full integration with <strong>Google Analytics</strong> and Cloudflare for data-driven decisions.
        </li>
      </ul>
      <p>
        My work {`didn't`} stop at deployment. I built a <strong>marketing automation tool</strong> that takes an SVG, auto-animates the drawing process, and
        screen-records it to create promotional content for social media, alongside implementing a full <strong>SEO strategy</strong>.
      </p>

      <h3>My Key Takeaways & The Road Ahead</h3>
      <p>
        Steevy Indie was an intensive boot camp where I refined my skills in <strong>React, Next.js, and Tailwind CSS</strong>. More importantly, I learned how
        to work <em>with</em> AI effectively—leveraging it for ideation, rapid prototyping, and coding assistance, while recognizing its limits and knowing when
        my own deep expertise was required to solve complex systemic problems.
      </p>

      <p>
        While currently an MVP, the project has a long roadmap, including backend integration for leaderboards and user progress, content security, and new
        puzzle modes. It stands as a testament to my ability to <strong>single-handedly drive a product from concept to market</strong>.
      </p>
    </>
  );
};

export default SteevyIndieStory;
