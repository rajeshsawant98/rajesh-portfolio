"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/Helper/AnimateIn";
import { experienceData, educationData } from "@/data/data";

type Tab = "work" | "education";

const OrgLogo = ({ logo, initials }: { logo?: string; initials: string }) => {
  const [failed, setFailed] = useState(false);

  if (logo && !failed) {
    return (
      <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden flex-shrink-0">
        <Image
          src={logo}
          alt={initials}
          width={56}
          height={56}
          className="object-contain p-2"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
      <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{initials}</span>
    </div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  return (
    <section id="experience" className="py-20 bg-primary-bg">
      <div className="w-[85%] mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">
          Background
        </h2>

        {/* Tab switcher */}
        <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-900 rounded-lg w-fit mb-10">
          {(["work", "education"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 capitalize cursor-pointer ${
                activeTab === tab
                  ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {tab === "work" ? "Work" : "Education"}
            </button>
          ))}
        </div>

        {/* Work tab */}
        {activeTab === "work" && (
          <div className="flex flex-col gap-8">
            {experienceData.map((exp, i) => (
              <AnimateIn key={exp.id} animation="fade" direction="up" delay={i * 0.08}>
                <div className="flex gap-4 items-start">
                  <OrgLogo logo={exp.logo} initials={exp.initials} />
                  <div className="flex-1 min-w-0 relative pl-4 border-l border-gray-200 dark:border-gray-800">
                    <div className="absolute -left-[5px] top-[14px] w-[9px] h-[9px] rounded-full bg-accent-purple border-2 border-primary-bg" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-0.5">
                      <h3 className="text-base font-bold">{exp.role}</h3>
                      <span className="text-gray-400 dark:text-gray-600 text-xs flex-shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-accent-purple-light text-sm font-medium mb-0.5">{exp.organization}</p>
                    <p className="text-gray-400 dark:text-gray-600 text-xs mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-accent-purple mt-1.5 text-xs flex-shrink-0">›</span>
                          <span className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        )}

        {/* Education tab */}
        {activeTab === "education" && (
          <div className="flex flex-col gap-8">
            {educationData.map((edu, i) => (
              <AnimateIn key={edu.id} animation="fade" direction="up" delay={i * 0.08}>
                <div className="flex gap-4 items-start">
                  <OrgLogo logo={edu.logo} initials={edu.initials} />
                  <div className="flex-1 min-w-0 relative pl-4 border-l border-gray-200 dark:border-gray-800">
                    <div className="absolute -left-[5px] top-[14px] w-[9px] h-[9px] rounded-full bg-accent-purple border-2 border-primary-bg" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-0.5">
                      <h3 className="text-base font-bold">{edu.degree}</h3>
                      <span className="text-gray-400 dark:text-gray-600 text-xs flex-shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-accent-purple-light text-sm font-medium mb-0.5">{edu.institution}</p>
                    <p className="text-gray-400 dark:text-gray-600 text-xs mb-4">{edu.location}</p>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-accent-purple mt-1.5 text-xs flex-shrink-0">›</span>
                          <span className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
