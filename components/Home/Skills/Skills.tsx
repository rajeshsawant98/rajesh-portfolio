import AnimateIn from "@/components/Helper/AnimateIn";
import { skillsGroups } from "@/data/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary-bg-alt">
      <div className="w-[85%] mx-auto max-w-5xl">
        <p className="text-accent-purple-light text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Technical Stack
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-12">
          Skills
        </h2>

        <div className="space-y-10">
          {skillsGroups.map((group, gi) => (
            <AnimateIn key={group.category} animation="fade" direction="up" delay={gi * 0.05}>
              <div>
                <h3 className="text-accent-purple-light font-semibold text-xs uppercase tracking-[0.2em] mb-5">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {group.skills.map((skill, si) => (
                    <AnimateIn key={skill.name} animation="flip" delay={gi * 0.05 + si * 0.08}>
                      <SkillCard
                        name={skill.name}
                        icon={skill.icon}
                        darkIcon={(skill as { darkIcon?: boolean }).darkIcon}
                      />
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
