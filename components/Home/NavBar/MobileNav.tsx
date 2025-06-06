
import React from 'react'
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

type Props = {
   showNav: boolean;
   closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav}: Props) => {

    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
   
  return (
    <div>
        <div className={`fixed ${navOpen} transform transition-all duration-300 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}> </div>
            <div className={`text-white ${navOpen} transform transition-all delay-100 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}>
             {navLinks.map((link) => {
              return (
                <Link key={link.id} href={link.url}>
                  <p className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">{link.label}</p>
                </Link>
              );
            })}
            <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem]  cursor-pointer text-white sm:w-8 sm:h-8 w-6 h-6 " />
            </div>

       
    </div>
  )
}

export default MobileNav