// components/stories/HISStory.tsx

const HISStory = () => {
  return (
    <>
      <p>
        At a pivotal moment for my company—facing the loss of key personnel and funding—we embarked on an ambitious project to replace a {`client's`} failing,
        costly legacy system with a modern <strong>Hospital Information System (HIS)</strong>. Due to my proven track record, I was selected as one of two{" "}
        <strong>founding engineers</strong> tasked with building the entire codebase from the ground up.
      </p>

      <h3>Strategic Foundations & Tech Choices</h3>
      <p>Our mission was to build a robust, scalable, and maintainable platform. We made several strategic decisions:</p>
      <ul>
        <li>
          <strong>Backend:</strong> We chose <strong>NestJS</strong> and <strong>Apollo GraphQL</strong>, building upon the {`team's`} existing expertise while
          upgrading to the latest versions to create a more powerful and structured foundation.
        </li>
        <li>
          <strong>Frontend:</strong> We leveled up our stack by adopting <strong>React with TypeScript</strong>, leveraging auto-generated types from our
          GraphQL API to ensure type safety and improve developer experience.
        </li>
        <li>
          <strong>Database:</strong> While sticking with <strong>MongoDB</strong> for its performance and team familiarity, we made the crucial switch from{" "}
          <strong>TypeORM</strong> to <strong>Mongoose</strong>. This move provided superior performance and flexibility as Mongoose is purpose-built for
          MongoDB, preparing us for the massive data loads of a hospital environment.
        </li>
      </ul>

      <h3>A Microservices-First Architecture</h3>
      <p>
        We designed the system based on a <strong>microservices architecture</strong> to ensure separation of concerns and independent scalability. The core
        services included:
      </p>
      <ul>
        <li>
          <em>auth:</em> For user authentication and role-based access control.
        </li>
        <li>
          <em>his:</em> Handling core hospital operational logic.
        </li>
        <li>
          <em>report:</em> For data aggregation and reporting.
        </li>
        <li>
          <em>sm:</em> Managing medical supplies.
        </li>
      </ul>
      <p>These services communicated internally via a high-performance TCP protocol, as documented by NestJS.</p>

      <h3>From Architect to Team Leader</h3>
      <p>
        My co-founder and I began by building the <em>auth</em> microservice, as it was a foundational dependency for all other services and would serve as a{" "}
        <strong>blueprint for future development</strong>.
      </p>

      <p>
        After my partner moved to a new role, I stepped up to become the <strong>Team Leader</strong> for the <em>auth</em> service, guiding the team to
        completion while also contributing hands-on development to other services as needed.
      </p>

      <h3>Proven Under Pressure: A Real-World Success Story</h3>
      <p>
        My most significant contribution to the <em>his</em> service was developing the clinical testing module. Through careful optimization, this feature
        proved its resilience during the pandemic, successfully processing <strong>thousands of daily COVID-19 tests</strong> at peak times without failure.
      </p>

      <h3>Overcoming Complex Challenges</h3>
      <p>This project pushed my skills in several key areas:</p>
      <ul>
        <li>
          <strong>Complex Database Design:</strong> Structuring data to manage intricate, multi-step clinical workflows.
        </li>
        <li>
          <strong>Advanced Form Optimization:</strong> Engineering large forms with dozens of fields and complex, overlapping validation rules, ensuring high
          performance on the frontend.
        </li>
        <li>
          <strong>Performance Tuning:</strong> Optimizing data queries for massive data tables across both the frontend and backend.
        </li>
      </ul>

      <h3>Lasting Impact & A Company-Wide Blueprint</h3>
      <p>
        Although the {`project's`} scope was later scaled down for smaller clinics due to post-COVID economic shifts, its impact was profound. The architecture
        and codebase we created became the <strong>official company-wide blueprint</strong> for all subsequent large-scale applications.
      </p>

      <p>
        On the DevOps front, while the CTO set up the core infrastructure with Traefik and Portainer, I took ownership of the deployment pipeline. I wrote and
        maintained the <strong>GitLab CI/CD</strong> scripts that automatically built our services into Docker images and pushed them to the registry. I then
        used <strong>Portainer</strong> to manage the deployment and lifecycle of these containers, ensuring our system remained resilient and easy to update.
      </p>
    </>
  );
};

export default HISStory;
