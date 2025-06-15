"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { navLinks } from "@/constant/constant";
//import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "fixed"
      } h-[10vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="text-white text-2xl font-bold flex items-center justify-between h-full w-[95%] sm:w-[90%] xl:w-[82.5%] mx-auto">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="ml-[-1.5rem] sm:ml-0"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        />
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const id = link.url.replace("#", "");
              return (
                <p
                  key={link.id}
                  className="nav_link cursor-pointer"
                  onClick={() => scrollToSection(id)}
                >
                  {link.label}
                </p>
              );
            })}
          </div>
          {/* Hamburger menu for mobile view */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
