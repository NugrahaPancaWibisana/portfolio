import { aboutData } from "../data/about.data";

const SkillIcon = {
  frontend: (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  backend: (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  ),
  tools: (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
};

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        <article className="flex w-full flex-col gap-6 lg:w-2/3">
          <header className="space-y-3">
            <h2
              id="about-heading"
              className="text-2xl font-normal sm:text-3xl sm:font-bold lg:text-4xl"
            >
              {aboutData.heading}
            </h2>
            <p className="text-lg font-normal text-gray-700 sm:text-2xl lg:text-3xl">
              {aboutData.subheading}
            </p>
          </header>

          <div className="space-y-4">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed font-normal text-black/60"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="mb-4 text-xl font-semibold">
              Experience Highlights
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {aboutData.experience.map((exp, index) => (
                <article
                  key={index}
                  className="rounded-lg border-2 p-6 transition-shadow hover:shadow-lg"
                >
                  <time className={`text-sm font-medium ${exp.color}`}>
                    {exp.period}
                  </time>
                  <h4 className="mt-2 font-semibold">{exp.title}</h4>
                  <p className="mt-1 text-sm text-black/60">{exp.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">
                    {exp.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </article>

        <aside
          className="w-full rounded-lg border-2 lg:w-1/2"
          aria-labelledby="skills-heading"
        >
          <div className="flex gap-3 border-b-2 p-4">
            <span
              className="block h-3 w-3 rounded-full bg-red-500"
              aria-hidden="true"
            ></span>
            <span
              className="block h-3 w-3 rounded-full bg-yellow-500"
              aria-hidden="true"
            ></span>
            <span
              className="block h-3 w-3 rounded-full bg-green-500"
              aria-hidden="true"
            ></span>
          </div>

          <div className="p-6">
            <h3 id="skills-heading" className="mb-6 text-lg font-semibold">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {aboutData.skills.map((category, index) => (
                <section key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className={category.color} aria-hidden="true">
                      {SkillIcon[category.icon]}
                    </div>
                    <h4 className="font-medium">{category.category}</h4>
                  </div>

                  <ul className="space-y-2 pl-8">
                    {category.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-black/60"
                          aria-hidden="true"
                        ></span>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{skill.name}</p>
                          {skill.level && (
                            <div className="mt-1 flex items-center gap-2">
                              <div
                                className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200"
                                role="progressbar"
                                aria-valuenow={skill.level}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-label={`${skill.name} proficiency`}
                              >
                                <div
                                  className={`h-full ${category.color.replace("text-", "bg-")}`}
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                              <span
                                className="text-xs text-black/60"
                                aria-hidden="true"
                              >
                                {skill.level}%
                              </span>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {aboutData.certifications && (
              <section className="mt-8 space-y-3 border-t-2 pt-6">
                <h4 className="font-medium">Certifications</h4>
                <ul className="space-y-2 pl-8">
                  {aboutData.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-black/60"
                        aria-hidden="true"
                      ></span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{cert.name}</p>
                        <p className="text-xs text-black/60">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
