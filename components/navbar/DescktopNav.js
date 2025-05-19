"use client";

import SocialBtns from "../SocialBtns";
import Link from "next/link";

import { Logo } from "../Svgs";

const DescktopNav = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav__container">
      <div className="nav__logo">
        <button type="button"
                className="logo__atag"
                onClick={() => scrollTop()}>
          <Logo styling="logo__svg" />
        </button>
      </div>
      <div className="nav__list">
        <Link href="#trainer" className="nav__lsitem">
          Trainer
        </Link>
        <Link href="#testimonials" className="nav__lsitem">
          Testimonials
        </Link>
        <Link href="#form" className="nav__lsitem">
          Join a training
        </Link>
      </div>
      <SocialBtns />
    </div>
  );
};

export default DescktopNav;
