import Image from "next/image";

interface SkillCardProps {
  name: string;
  icon: string;
  darkIcon?: boolean;
}

const SkillCard = ({ name, icon, darkIcon }: SkillCardProps) => {
  return (
    <div className="w-full h-[130px] bg-card-dark border border-gray-200 dark:border-gray-800 d2-tile cursor-pointer text-center flex flex-col items-center justify-center px-3">
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
        <Image
          src={icon}
          alt={name}
          height={56}
          width={56}
          className={`object-contain ${darkIcon ? "dark:invert dark:brightness-200" : ""}`}
        />
      </div>
      <h3 className="text-gray-900 dark:text-white text-sm font-semibold mt-3 leading-tight">{name}</h3>
    </div>
  );
};

export default SkillCard;
