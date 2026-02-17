"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNavBg(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-[90px] h-px w-px" />
      <nav
        className={`fixed ${
          navBg ? "bg-nav-bg" : ""
        } h-[10vh] z-10 w-full transition-all duration-200`}
      >
        <div className="text-gray-900 dark:text-white text-2xl font-bold flex items-center justify-between h-full w-[95%] sm:w-[90%] xl:w-[82.5%] mx-auto">
          <a href="#home">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="ml-[-1.5rem] sm:ml-0 cursor-pointer"
              priority
            />
          </a>
          <div className="flex items-center space-x-10">
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="nav_link"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <ThemeToggle />
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-gray-900 dark:text-white lg:hidden"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
