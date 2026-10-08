import AnimateIn from "@/components/Helper/AnimateIn";
import { projectData } from "@/data/data";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectImageCarousel from "./ProjectImageCarousel";

const MAX_TAGS = 6;

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary-bg-alt">
      <div className="w-[85%] mx-auto max-w-5xl">
        <p className="text-accent-purple-light text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Work
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectData.map((project, i) => (
            <AnimateIn key={project.id} animation="fade" direction="up" delay={i * 0.1}>
              <div className="bg-card-dark border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-accent-purple/40 transition-colors duration-300 flex flex-col h-full">
                {/* Screenshot banner */}
                <div className="relative aspect-video overflow-hidden bg-card-dark flex items-center justify-center">
                  <ProjectImageCarousel images={project.images} alt={project.title} />

                  {/* Badge top-left */}
                  {project.badge && (
                    <span
                      className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded z-10 ${
                        project.badge === "IEEE COMPSAC 2025"
                          ? "bg-primary-dark border border-accent-purple/60 text-accent-purple-light"
                          : project.badge === "PRODUCTION"
                          ? "bg-accent-purple text-white"
                          : "bg-gray-800 border border-gray-600 text-gray-300"
                      }`}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Card body: role, results, stack. Full write-up lives on the case study page. */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold mb-0.5">
                    <Link href={`/projects/${project.slug}`} className="hover:text-accent-purple-light transition-colors">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-accent-purple-light text-xs font-medium">{project.subtitle}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 mb-4">
                    {[project.period, project.role].filter(Boolean).join(" · ")}
                  </p>

                  <ul className="space-y-2 mb-4 flex-1">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        <span className="text-accent-purple mt-0.5 flex-shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, MAX_TAGS).map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent-purple/10 border border-accent-purple/20 text-accent-purple-light text-xs px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > MAX_TAGS && (
                      <span className="text-gray-500 dark:text-gray-400 text-xs px-1 py-0.5">
                        +{project.techStack.length - MAX_TAGS} more
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-2 text-accent-purple-light hover:text-accent-purple transition-colors"
                    >
                      Case study <FaArrowRight className="text-xs" />
                    </Link>
                    {project.url && project.url !== project.githubLink && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="text-xs" /> Live
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
