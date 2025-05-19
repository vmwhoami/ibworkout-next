"use client";

import SocialBtns from "../SocialBtns";
import Link from "next/link";

import { Logo } from "../Svgs";

const DesktopNav = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav__container">
      <div className="nav__logo">
        <button
          type="button"
          className="logo__atag"
          onClick={scrollTop}
          aria-label="Наверх"
        >
          <Logo styling="logo__svg" />
        </button>
      </div>

      <div className="nav__list">
        <Link href="#trainer" className="nav__lsitem">
          Познакомьтесь с тренером
        </Link>
        <Link href="#testimonials" className="nav__lsitem">
          Отзывы наших клиентов
        </Link>
        <Link href="#form" className="nav__lsitem">
          Записаться на тренировку
        </Link>
      </div>

      <SocialBtns />
    </div>
  );
};

export default DesktopNav;
