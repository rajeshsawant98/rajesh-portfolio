import SectionHeading from "@/components/Helper/SectionHeading";
import AnimateIn from "@/components/Helper/AnimateIn";
import { aboutInfo } from "@/data/data";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const stats = [
  { image: "/images/customer.png", value: aboutInfo.client, label: "Satisfied Clients" },
  { image: "/images/experience.png", value: aboutInfo.experience, label: "Years of Experience" },
  { image: "/images/completed.png", value: aboutInfo.project, label: "Completed Projects" },
  { image: "/images/rocket.png", value: aboutInfo.website, label: "Webapps Delivered" },
];

const expertise = [
  { label: "Software Development", color: "bg-blue-800" },
  { label: "Data Analytics", color: "bg-orange-800" },
  { label: "Project Management", color: "bg-green-800" },
];

const About = () => {
  return (
    <section id="about" className="pt-16 pb-16 bg-primary-bg">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        <AnimateIn animation="fade" direction="left">
          <h2 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h2>
          <p className="mt-6 text-base text-gray-500">{aboutInfo.description}</p>
          <div className="mt-8 space-y-6">
            {expertise.map((item) => (
              <div key={item.label} className="flex items-center space-x-2">
                <div className={`w-7 h-7 ${item.color} flex items-center justify-center`}>
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn animation="zoom" delay={0.15}>
          <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
            {stats.map((stat) => (
              <div key={stat.label}>
                <Image
                  src={stat.image}
                  alt={stat.label}
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <p className="mt-3 font-bold text-xl text-white text-center">{stat.value}</p>
                <p className="text-base sm:text-lg text-gray-400 text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default About;
