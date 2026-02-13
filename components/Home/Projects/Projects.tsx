import SectionHeading from "@/components/Helper/SectionHeading";
import AnimateIn from "@/components/Helper/AnimateIn";
import { projectData } from "@/data/data";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-primary-bg">
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 max-w-5xl space-y-16">
        {projectData.map((project, i) => (
          <AnimateIn key={project.id} animation="fade" direction="up" delay={i * 0.1}>
            <div className="bg-card-dark rounded-xl p-6 md:p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-accent-purple-light text-sm md:text-base font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                  Architecture
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.architecturePoints.map((point, j) => (
                    <div key={j} className="flex items-start space-x-2">
                      <span className="text-accent-purple-light mt-0.5 text-xs">&#9656;</span>
                      <span className="text-gray-400 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
};

export default Projects;
