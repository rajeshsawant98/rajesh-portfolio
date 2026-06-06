import AnimateIn from "@/components/Helper/AnimateIn";
import { researchData } from "@/data/data";
import { FaFileAlt } from "react-icons/fa";

const Research = () => {
  return (
    <section id="research" className="py-20 bg-primary-bg">
      <div className="w-[85%] mx-auto max-w-4xl">
        <p className="text-accent-purple-light text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Research
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-12">
          Publications
        </h2>

        <div className="space-y-6">
          {researchData.map((paper, i) => (
            <AnimateIn key={paper.id} animation="fade" direction="up" delay={i * 0.1}>
              <div className="bg-card-dark border border-accent-purple/25 rounded-xl p-6 md:p-8 flex items-start gap-5">
                <div className="flex-shrink-0 w-11 h-11 bg-accent-purple/10 border border-accent-purple/30 rounded-lg flex items-center justify-center mt-0.5">
                  <FaFileAlt className="text-accent-purple-light text-lg" />
                </div>
                <div>
                  <p className="text-accent-purple-light text-xs font-semibold tracking-widest uppercase mb-2">
                    {paper.venue} — {paper.type}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {paper.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {paper.topics.map((topic) => (
                      <span
                        key={topic}
                        className="bg-accent-purple/10 border border-accent-purple/20 text-accent-purple-light text-xs px-3 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
