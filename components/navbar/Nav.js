'use client'

import React, { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import DescktopNav from './DescktopNav';

const Nav = () => {
  const [fade, setFade] = useState(false);

  const fadeOnScroll = () => {
    if (window.scrollY > 200) {
      setFade(true);
    } else {
      setFade(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fadeOnScroll);
    return () => {
      window.removeEventListener('scroll', fadeOnScroll);
    };
  }, []);

  return (
    <nav className={fade ? 'nav faded' : 'nav'}>
      <MobileNav />
      <DescktopNav />
    </nav>
  );
};

export default Nav;
