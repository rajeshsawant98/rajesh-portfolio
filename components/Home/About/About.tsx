import SectionHeading from "@/components/Helper/SectionHeading";
import AnimateIn from "@/components/Helper/AnimateIn";
import { aboutInfo } from "@/data/data";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="pt-16 pb-16 bg-primary-bg">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 max-w-4xl">
        <AnimateIn animation="fade" direction="left">
          <h2 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h2>
        </AnimateIn>
        <AnimateIn animation="fade" direction="left" delay={0.1}>
          <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {aboutInfo.description}
          </p>
        </AnimateIn>
        <AnimateIn animation="fade" direction="up" delay={0.2}>
          <div className="mt-10 space-y-4">
            {aboutInfo.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start space-x-3">
                <FaArrowRight className="text-accent-purple-light mt-1.5 flex-shrink-0 text-sm" />
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default About;
