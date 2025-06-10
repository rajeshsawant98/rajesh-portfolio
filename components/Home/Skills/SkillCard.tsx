import React from "react";
import Image from "next/image";

type SkillCardProps = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: SkillCardProps) => {
  const { id, title, image, percent } = skill;
  return <div className="p-6 hover:bg-blue-900 duration-200 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
    <Image src={image} alt={title} height={80} width={80} className="object-cover mx-auto"/>
    <h1 className="text-white text-[18px] font-[600] mt-4">{title}</h1>

    
    </div>;
};

export default SkillCard;
