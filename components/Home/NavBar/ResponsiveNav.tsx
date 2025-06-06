"use client";
import React , { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);
  return ( <>
    <Nav openNav ={showNavHandler}/>
    <MobileNav showNav = {showNav} closeNav={closeNavHandler} />
    </>
  )
}

export default ResponsiveNav