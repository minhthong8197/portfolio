// components/stories/HTEcoStory.tsx

const HTEcoStory = () => {
  return (
    <>
      <h3>From a Learning Exercise to a Live Product</h3>
      <p>
        HTEco is more than just a technical project; {`it's`} my <strong>first-ever personal product</strong>, born from a passion for the Hattrick online game
        and a drive to master new technologies. What began as a learning exercise has now been a stable, operational application for over{" "}
        <strong>two years</strong>. This project chronicles my journey in building a self-sustaining product, solving real-world challenges, and continuously
        evolving my technical skills.
      </p>

      <h3>The Tech Evolution: A Full-Stack Migration</h3>
      <p>The project has undergone a significant technical evolution, reflecting my growth and adaptation to modern development trends.</p>
      <ul>
        <li>
          <strong>Version 1.0 (The Foundation):</strong> The first iteration was built on a robust, separated stack: a <strong>NestJS</strong> backend serving a{" "}
          <strong>React</strong> frontend (built with Vite and Material UI). This choice was crucial for solidifying my core full-stack development skills in a
          traditional architecture.
        </li>
        <li>
          <strong>Version 2.0 (The Great Migration):</strong> To embrace a more modern, unified, and performant architecture, I{" "}
          <strong>re-architected the entire application</strong> using <strong>Fresh</strong>. This full-stack framework, built on <strong>Deno</strong> and{" "}
          <strong>Preact</strong>, allowed me to create a seamless development experience from server to client, styled with <strong>Tailwind CSS</strong> for a
          faster, more flexible UI.
        </li>
      </ul>

      <h3>Key Challenges & My Solutions</h3>
      <ol>
        <li>
          <strong>Taming a Legacy API</strong>
          <p>
            The primary challenge was interfacing with {`Hattrick's`} legacy API, which uses <strong>SOAP/XML and OAuth 1.0</strong>. To solve this, I
            engineered an adapter layer that cleanly transforms the complex XML data into predictable JSON, creating a modern interface for the rest of the
            application to consume.
          </p>
        </li>
        <li>
          <strong>Engineering a Smart User Experience</strong>
          <p>
            The Hattrick API often experiences slowdowns and only provides data on user request. To prevent a laggy UI, I implemented an{" "}
            <strong>intelligent pre-fetching strategy</strong>. The system analyzes user behavior to proactively load and cache necessary data in the
            background. This was critical for turning a potentially frustrating wait into a smooth, uninterrupted interaction, especially when the app needed to
            aggregate multiple pages of historical data for its calculations.
          </p>
        </li>
      </ol>

      <h3>From Raw Data to Actionable Insights</h3>
      <p>
        My role extended beyond development into data analysis. The core value of HTEco is its ability to transform raw data into insights. This involved
        aggregating data and calculating new derivative metrics. Most importantly, <strong>intelligently grouping disparate data rows</strong> into logical sets
        that tell a coherent story to the user through data visualization.
      </p>

      <h3>Architecture & Operations</h3>
      <p>
        The deployment architecture also evolved alongside the tech stack. Initially, the application was deployed on a <strong>DigitalOcean droplet</strong>,
        with <strong>NGINX</strong> serving as a reverse proxy for both the frontend and backend services. Following the migration to Fresh, I moved the
        deployment to <strong>Deno Deploy</strong>, leveraging its native support for the Deno runtime and edge computing capabilities for superior performance
        and simplified operations.
      </p>
    </>
  );
};

export default HTEcoStory;
