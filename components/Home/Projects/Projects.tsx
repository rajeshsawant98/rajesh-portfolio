import SectionHeading from "@/components/Helper/SectionHeading";
import AnimateIn from "@/components/Helper/AnimateIn";
import { projectData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-primary-bg">
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, i) => (
          <AnimateIn key={project.id} animation="fade" direction="up" delay={i * 0.15}>
            <div className="relative group rounded-lg overflow-hidden bg-blue-950 hover:scale-105 transition-transform duration-300">
              <Link
                href={project.url}
                target="_blank"
                className="block w-full h-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-60 object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                />

                <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black to-transparent px-4 py-3 text-white z-10 flex items-end">
                  <h3 className="text-lg font-semibold mb-7 px-1">{project.title}</h3>
                </div>

                <div className="absolute inset-0 bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end z-20">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-purple-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
};

export default Projects;
