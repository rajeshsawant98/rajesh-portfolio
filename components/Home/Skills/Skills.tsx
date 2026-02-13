import SectionHeading from "@/components/Helper/SectionHeading";
import AnimateIn from "@/components/Helper/AnimateIn";
import { skillsGroups } from "@/data/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-primary-bg-alt">
      <SectionHeading>Technical Stack</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto max-w-6xl space-y-12">
        {skillsGroups.map((group, gi) => (
          <AnimateIn key={group.category} animation="fade" direction="up" delay={gi * 0.05}>
            <div>
              <h3 className="text-accent-purple-light font-semibold text-sm uppercase tracking-wider mb-5">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {group.skills.map((skill, si) => (
                  <AnimateIn key={skill.name} animation="flip" delay={gi * 0.05 + si * 0.05}>
                    <SkillCard name={skill.name} icon={skill.icon} />
                  </AnimateIn>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
};

export default Skills;
