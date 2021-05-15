import React, { useRef } from 'react';
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
      <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
      <label htmlFor="nav" className="navigation-handle">
        <span className="navigation-icon">&nbsp;</span>
      </label>
      <div className="navigation-background">&nbsp;</div>
      <div className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-item">
            <a href="#trainer" className="navigation-link" onClick={unsetCheckbox}> Тренер </a>
          </li>
          <li className="navigation-item">
            <a href="#testimonials" className="navigation-link" onClick={unsetCheckbox}> Отзывы</a>
          </li>
          <li className="navigation-item">
            <a href="#form" className="navigation-link" onClick={unsetCheckbox}> Записаться</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
