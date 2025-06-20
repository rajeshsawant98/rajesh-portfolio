import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/data/data";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="py-16 bg-[#050715]">
      <SectionHeading>My Skills</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill, i) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={skill.id}
            >
              <SkillCard skill={skill}></SkillCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
