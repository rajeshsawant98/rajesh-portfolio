import AnimateIn from "@/components/Helper/AnimateIn";
import { projectData } from "@/data/data";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectImageCarousel from "./ProjectImageCarousel";
import { projectRarity } from "@/components/Project/ProjectInspect";

const Projects = () => {
  return (
    <section className="py-20 bg-primary-bg-alt">
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
              <div className="bg-card-dark border border-gray-200 dark:border-gray-800 overflow-hidden d2-tile flex flex-col h-full">
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

                  {/* Links top-right */}
                  <div className="absolute top-3 right-3 flex gap-2 z-10">
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        className="bg-black/50 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white p-1.5 rounded transition-colors"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="bg-black/50 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white p-1.5 rounded transition-colors"
                      >
                        <FaGithub className="text-sm" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <Link href={`/projects/${project.slug}`} className={`block px-5 py-3 ${projectRarity(project.badge)}`}>
                  <h3 className="text-base font-bold uppercase tracking-wider">{project.title}</h3>
                  <p className="!text-white/75 text-xs font-medium">{project.subtitle}</p>
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent-purple/10 border border-accent-purple/20 text-accent-purple-light text-xs px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 self-start flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white"
                  >
                    Inspect <span aria-hidden>›</span>
                  </Link>
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
