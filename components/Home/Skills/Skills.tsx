import SectionHeading from "@/components/Helper/SectionHeading";
import AnimateIn from "@/components/Helper/AnimateIn";
import { skillsData } from "@/data/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-primary-bg-alt">
      <SectionHeading>My Skills</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill, i) => (
          <AnimateIn key={skill.id} animation="flip" delay={i * 0.1}>
            <SkillCard skill={skill} />
          </AnimateIn>
        ))}
      </div>
    </section>
  );
};

export default Skills;
