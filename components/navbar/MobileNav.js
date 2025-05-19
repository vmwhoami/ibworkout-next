"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Logo } from "../Svgs";

const MobileNav = () => {
  const checkboxRef = useRef();

  const toggleMenu = () => {
    checkboxRef.current.checked = !checkboxRef.current.checked;
  };

  return (
    <div className="navigation">
      <div className="navigation__logo">
        <button
          type="button"
          className="logo__atag"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            toggleMenu();
          }}
          aria-label="Наверх"
        >
          <Logo styling="logo__svg" />
        </button>
      </div>

      <input
        type="checkbox"
        ref={checkboxRef}
        id="nav"
        className="navigation-checkbox"
      />

      <label htmlFor="nav" className="navigation-handle" aria-label="Меню">
        <span className="navigation-icon">&nbsp;</span>
      </label>

      <div className="navigation-background">&nbsp;</div>

      <nav className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link
              href="#trainer"
              className="navigation-link"
              onClick={toggleMenu}
            >
              Знакомство с тренером
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              href="#testimonials"
              className="navigation-link"
              onClick={toggleMenu}
            >
              Отзывы довольных клиентов
            </Link>
          </li>
          <li className="navigation-item">
            <Link href="#form" className="navigation-link" onClick={toggleMenu}>
              Записаться на пробную тренировку
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
