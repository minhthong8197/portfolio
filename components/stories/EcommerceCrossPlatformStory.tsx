// components/stories/EcommerceCrossPlatformStory.tsx

const EcommerceCrossPlatformStory = () => {
  return (
    <>
      <p>
        At my previous company, we had a robust, responsive e-commerce web application and a separate admin panel. My primary objective was to{" "}
        <strong>rapidly transition our existing web product into a native mobile experience</strong> while simultaneously establishing a scalable foundation for
        future cross-platform development initiatives.
      </p>

      <h3>The Challenge: Efficiency and Consistency</h3>
      <p>
        The core challenge was to achieve significant code reuse between web and mobile platforms to accelerate development cycles and ensure a consistent brand
        experience without sacrificing native performance.
      </p>

      <h3>My Approach: Embracing the Universal App Architecture</h3>
      <p>
        After extensive research into various cross-platform solutions, I identified the <strong>universal app architecture</strong> as the optimal path
        forward. This innovative approach, combining <strong>Tamagui</strong> for styling, <strong>Solito</strong> for navigation, <strong>Next.js</strong> for
        web, and <strong>Expo</strong> for mobile within a <strong>monorepo</strong> structure, promised maximum code sharing and a streamlined development
        workflow.
      </p>

      <p>
        I built several proof-of-concept demos to rigorously test this {`architecture's`} capabilities and its compatibility with our existing {`team's`} React
        and TypeScript proficiency. The successful outcomes from these demos confirmed its suitability as our chosen technology stack.
      </p>

      <h3>Technical Implementation & Problem Solving</h3>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>
          <strong>Seamless Backend Integration:</strong> I handled the setup and configuration to seamlessly integrate the new frontend with our existing
          GraphQL backend. This involved setting up the GraphQL client and leveraging <strong>GraphQL Code Generator for TypeScript</strong> to ensure robust
          type safety and efficient data fetching across the entire monorepo.
        </li>
        <li>
          <strong>Component Development with Tamagui:</strong> I developed core UI components and various e-commerce specific screens, adhering to {`Tamagui's`}{" "}
          styling philosophy. This allowed for highly optimized and consistent UIs across both web and mobile.
        </li>
        <li>
          <strong>Robust Form Handling:</strong> For managing user inputs and validations across various e-commerce forms, I integrated and utilized{" "}
          <strong>Formik</strong>, ensuring data integrity and a smooth user experience.
        </li>
      </ul>

      <h3>Establishing a Staging Environment & CI/CD</h3>
      <p>
        To support continuous development and testing, I was responsible for establishing a streamlined staging deployment pipeline for the web application.
        This involved:
      </p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>
          Containerizing the Next.js web build using <strong>Docker standalone</strong> configurations.
        </li>
        <li>
          Implementing automated deployments via <strong>GitLab CI</strong>, connected to our <strong>Portainer</strong> system. This ensured that every code
          push to the staging branch triggered an efficient and reliable update of the web application.
        </li>
      </ul>

      <h3>Key Learnings & Impact</h3>
      <p>
        Though I transitioned to a new role before this project reached full production, the experience was profoundly impactful. I gained deep insights into
        the complexities and immense benefits of true universal application development. This project was a testament to my ability to:
      </p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>
          <strong>Research and Validate Cutting-Edge Technologies:</strong> Successfully identify, evaluate, and adopt a complex new tech stack.
        </li>
        <li>
          <strong>Architect for Scalability and Reuse:</strong> Design a system that maximized code sharing and accelerated future development.
        </li>
        <li>
          <strong>Implement Robust DevOps Practices:</strong> Set up automated deployment pipelines critical for rapid iteration.
        </li>
      </ul>
      <p>
        This initiative laid critical groundwork, showcasing a path for the company to efficiently expand its digital presence across platforms with a unified
        codebase.
      </p>
    </>
  );
};

export default EcommerceCrossPlatformStory;
