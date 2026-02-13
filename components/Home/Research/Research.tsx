import SectionHeading from "@/components/Helper/SectionHeading";
import AnimateIn from "@/components/Helper/AnimateIn";
import { researchData } from "@/data/data";
import { FaFileAlt } from "react-icons/fa";

const Research = () => {
  return (
    <section id="research" className="py-16 bg-primary-bg-alt">
      <SectionHeading>Research & Publications</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 max-w-4xl space-y-8">
        {researchData.map((paper, i) => (
          <AnimateIn key={paper.id} animation="fade" direction="up" delay={i * 0.1}>
            <div className="bg-card-dark rounded-xl p-6 md:p-8 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center mt-1">
                  <FaFileAlt className="text-accent-purple-light text-lg" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {paper.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-accent-purple-light text-sm font-semibold">
                      {paper.venue}
                    </span>
                    <span className="text-gray-600">|</span>
                    <span className="text-green-400 text-sm font-medium">
                      {paper.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mt-3">
                    {paper.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {paper.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
};

export default Research;
