import React from "react";
import { BaseInfo } from "@/data/data";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="home"
    className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-2 text-gray-300 font-semibold"
            >
              I am {BaseInfo.name}
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7x1 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
            >
              {BaseInfo.position}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-4 text-sm md:text-base lg:text-2xl text-white opacity-60 "
            >
              {BaseInfo.description}
            </p>
            <a
              href="/Rajesh_Sawant_Resume.pdf"
              download
            >
              <button
                data-aos="zoom-in"
                data-aos-delay="300"
                className=" md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 cursor-pointer"
              >
                <span> Download CV</span>
                <FaDownload />
              </button>
            </a>
          </div>
          <div className="mx-auto hidden lg:block overflow-x-hidden">
            <Image
              data-aos="zoom-in"
              data-aos-delay="400"
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
