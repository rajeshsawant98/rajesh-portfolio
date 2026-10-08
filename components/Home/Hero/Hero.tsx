import { BaseInfo, contactData } from "@/data/data";
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import AnimateIn from "@/components/Helper/AnimateIn";
import HeroPhotoStack from "./HeroPhotoStack";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[87vh] flex items-center bg-primary-dark overflow-hidden"
    >
      <div className="w-[85%] max-w-5xl mx-auto py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">

          {/* Left: text */}
          <div className="flex-1 min-w-0">
            <AnimateIn animation="fade" direction="up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] mb-4 text-gray-900 dark:text-white">
                Hi, I&apos;m Rajesh.
              </h1>
            </AnimateIn>

            <AnimateIn animation="fade" direction="up" delay={0.08}>
              <p className="text-accent-purple-light font-semibold text-base md:text-lg mb-5">
                {BaseInfo.position} — {BaseInfo.specialty}
                <span className="text-gray-500 dark:text-gray-400 font-normal"> · Tempe, AZ</span>
              </p>
            </AnimateIn>

            <AnimateIn animation="fade" direction="up" delay={0.14}>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-3 max-w-lg">
                I build AI pipelines and full-stack applications that go from research to production.
              </p>
              <ul className="flex flex-wrap gap-2 mb-8 max-w-lg">
                {BaseInfo.proofPoints.map((point) => (
                  <li
                    key={point}
                    className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn animation="fade" direction="up" delay={0.2}>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="#projects"
                  className="px-5 py-2.5 bg-accent-purple hover:bg-accent-purple-hover text-white font-semibold text-sm rounded-lg transition-colors duration-200"
                >
                  View Projects
                </a>
                <a
                  href="/Rajesh_Sawant_Resume.pdf"
                  download
                  className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 hover:border-accent-purple dark:hover:border-accent-purple text-gray-900 dark:text-white font-semibold text-sm rounded-lg transition-colors duration-200"
                >
                  Resume <FaDownload className="text-xs" />
                </a>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/rajesh-sawant11/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-purple-light transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="https://github.com/rajeshsawant98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-purple-light transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-gray-400 hover:text-accent-purple-light transition-colors duration-200"
                    aria-label="Email"
                  >
                    <FaEnvelope className="text-2xl" />
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Right: swipeable photo stack */}
          <AnimateIn animation="zoom" delay={0.1}>
            <div className="hidden lg:flex flex-shrink-0 items-center justify-center pb-8">
              <HeroPhotoStack images={BaseInfo.heroImages} />
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
};

export default Hero;
