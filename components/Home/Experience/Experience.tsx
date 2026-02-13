import SectionHeading from "@/components/Helper/SectionHeading";
import AnimateIn from "@/components/Helper/AnimateIn";
import { experienceData } from "@/data/data";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-primary-bg">
      <SectionHeading>Experience</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 max-w-4xl space-y-12">
        {experienceData.map((exp, i) => (
          <AnimateIn key={exp.id} animation="fade" direction="up" delay={i * 0.1}>
            <div className="relative pl-6 border-l-2 border-gray-800">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent-purple" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-500 flex-shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-accent-purple-light text-sm font-medium mb-1">
                {exp.organization}
              </p>
              <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, j) => (
                  <li key={j} className="flex items-start space-x-2">
                    <span className="text-gray-600 mt-1.5 text-xs flex-shrink-0">&#9656;</span>
                    <span className="text-gray-400 text-sm leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
};

export default Experience;
