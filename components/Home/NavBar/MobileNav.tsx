import { navLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";
import ThemeToggle from "./ThemeToggle";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      <div
        className={`fixed ${navOpen} transform transition-all duration-300 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
        onClick={closeNav}
      />
      <div
        className={`text-gray-900 dark:text-white ${navOpen} transform transition-all delay-100 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-white dark:bg-primary-dark space-y-6 z-[10000]`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-gray-300 dark:border-white sm:text-[30px]"
            onClick={closeNav}
          >
            {link.label}
          </a>
        ))}
        <div className="absolute top-[0.7rem] right-[1.4rem] flex items-center gap-3">
          <ThemeToggle />
          <CgClose
            onClick={closeNav}
            className="cursor-pointer text-gray-900 dark:text-white sm:w-8 sm:h-8 w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
