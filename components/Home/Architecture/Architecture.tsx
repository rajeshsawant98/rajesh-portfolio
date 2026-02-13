import SectionHeading from "@/components/Helper/SectionHeading";
import AnimateIn from "@/components/Helper/AnimateIn";
import { architecturePhilosophy } from "@/data/data";

const Architecture = () => {
  return (
    <section id="architecture" className="py-16 bg-primary-bg">
      <SectionHeading>Architecture Philosophy</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {architecturePhilosophy.map((item, i) => (
          <AnimateIn key={item.title} animation="fade" direction="up" delay={i * 0.08}>
            <div className="bg-card-dark rounded-xl p-6 border border-gray-800 h-full">
              <h3 className="text-white font-bold text-base md:text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
};

export default Architecture;
