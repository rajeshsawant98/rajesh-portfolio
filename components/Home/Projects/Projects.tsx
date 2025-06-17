import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="py-16 bg-[#050709]">
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, i) => {
          return (
            <div
              key={project.id}
              className="relative group rounded-lg overflow-hidden bg-blue-950 hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
            >
              <Link
                href={project.url}
                target="_blank"
                className="block w-full h-full"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-60 object-cover"
                />

                {/* Bottom Gradient Overlay (Default) */}
                <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black to-transparent px-4 py-3 text-white z-10 flex items-end">
                  <h3 className="text-lg font-semibold mb-7 px-1">{project.title}</h3>
                </div>

                {/* Hover Panel */}
                <div className="absolute inset-0 bg-black bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end z-20">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">
                      {project.description}
                    </p>
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
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
