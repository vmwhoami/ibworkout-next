import React, { useRef } from 'react';
import Link from 'next/link'
import { Logo } from '../Svgs';

const MobileNav = () => {
  const checkBoxChecker = useRef();
  function unsetCheckbox() {
    checkBoxChecker.current.checked = !checkBoxChecker.current.checked;
    return null;
  }
  return (
    <div className="navigation">
      <div className="navigation__logo">
        <button type="button" className="logo__atag" href="#">
          <Logo styling="logo__svg" />
        </button>
      </div>
      <input
        type="checkbox"
        ref={checkBoxChecker}
        name="nav"
        id="nav"
        className="navigation-checkbox"
      />

      <label htmlFor="nav" className="navigation-handle">
        <span className="navigation-icon">&nbsp;</span>
      </label>
      <div className="navigation-background">&nbsp;</div>
      <div className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link href="#trainer" >
              <a className="navigation-link" onClick={unsetCheckbox}> Тренер </a>
            </Link>
          </li>
          <li className="navigation-item">
            <Link href="#testimonials" >
              <a className="navigation-link" onClick={unsetCheckbox} > Отзывы</a>
            </Link>
          </li>
          <li className="navigation-item">
            <Link href="#form" >
              <a className="navigation-link" onClick={unsetCheckbox} > Записаться</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
