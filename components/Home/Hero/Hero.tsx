import { BaseInfo } from "@/data/data";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import AnimateIn from "@/components/Helper/AnimateIn";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-primary-dark overflow-hidden relative"
    >
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <AnimateIn animation="fade" direction="left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 text-gray-300 font-semibold">
                {BaseInfo.name}
              </h1>
            </AnimateIn>
            <AnimateIn animation="fade" direction="right" delay={0.1}>
              <h2 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
                {BaseInfo.position}
              </h2>
            </AnimateIn>
            <AnimateIn animation="fade" direction="left" delay={0.15}>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl text-accent-purple-light font-medium">
                {BaseInfo.tagline}
              </p>
            </AnimateIn>
            <AnimateIn animation="fade" direction="left" delay={0.25}>
              <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl">
                {BaseInfo.description}
              </p>
            </AnimateIn>
            <AnimateIn animation="zoom" delay={0.35}>
              <a href="/Rajesh_Sawant_Resume.pdf" download>
                <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 cursor-pointer">
                  <span>Download Resume</span>
                  <FaDownload />
                </button>
              </a>
            </AnimateIn>
          </div>
          <div className="mx-auto hidden lg:block overflow-x-hidden">
            <AnimateIn animation="zoom" delay={0.4}>
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={500}
                height={500}
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;