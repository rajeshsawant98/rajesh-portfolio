import Image from "next/image";

interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="w-full h-[130px] hover:bg-blue-900 duration-200 transition-all cursor-pointer text-center rounded-lg bg-gray-900 flex flex-col items-center justify-center px-3">
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
        <Image
          src={icon}
          alt={name}
          height={56}
          width={56}
          className="object-contain"
        />
      </div>
      <h3 className="text-white text-sm font-semibold mt-3 leading-tight">{name}</h3>
    </div>
  );
};

export default SkillCard;
