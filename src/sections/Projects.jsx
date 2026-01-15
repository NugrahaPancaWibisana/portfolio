import { projectsData } from "../data/projects.data";

const TechBadge = ({ tech }) => (
  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-black hover:text-white">
    {tech}
  </span>
);

const ProjectCard = ({ project, index }) => {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-lg border-2 transition-shadow hover:shadow-lg"
      aria-labelledby={`project-${index}-title`}
    >
      <div className="relative h-48 overflow-hidden border-b-2 bg-gray-100 sm:h-64">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg
              className="h-16 w-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        
        {project.status && (
          <span
            className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium ${
              project.status === "Completed"
                ? "bg-green-100 text-green-700"
                : project.status === "In Progress"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <header className="mb-3">
          <h3
            id={`project-${index}-title`}
            className="text-xl font-semibold transition-colors group-hover:text-blue-700"
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-black/60">{project.period}</p>
        </header>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-black/60">
          {project.description}
        </p>

        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 text-sm font-medium">Key Features:</h4>
            <ul className="space-y-1 pl-5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-black/60 list-disc">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4">
          <h4 className="sr-only">Technologies used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <TechBadge key={idx} tech={tech} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-t-2 pt-4">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/80"
              aria-label={`View live demo of ${project.title}`}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border-2 border-black px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white"
              aria-label={`View source code of ${project.title} on GitHub`}
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full items-center justify-center px-4 py-1 sm:px-6 sm:py-16 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="w-full max-w-7xl">
        <header className="mb-12 text-center">
          <h2
            id="projects-heading"
            className="text-2xl font-normal sm:font-bold sm:text-3xl lg:text-4xl"
          >
            {projectsData.heading}
          </h2>
          <p className="mt-3 text-lg font-normal text-gray-700 sm:text-2xl lg:text-3xl">
            {projectsData.subheading}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-normal leading-relaxed text-black/60">
            {projectsData.description}
          </p>
        </header>

        {/* {projectsData.categories && projectsData.categories.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {projectsData.categories.map((category, index) => (
              <button
                key={index}
                className="rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white"
                aria-label={`Filter projects by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        )} */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projectsData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-lg border-2 p-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold">Interested in working together?</p>
            <p className="mt-1 text-sm text-black/60">
              Let's discuss your next project
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-black px-6 py-3 text-center font-medium text-white transition-colors hover:bg-black/80"
              aria-label="Navigate to contact section"
            >
              Get in Touch
            </a>
            <a
              href={projectsData.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-black px-6 py-3 text-center font-medium transition-colors hover:bg-black hover:text-white"
              aria-label="View all projects on GitHub"
            >
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}