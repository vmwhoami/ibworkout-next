import SocialBtns from '../SocialBtns';
import { Logo } from '../Svgs';

const DescktopNav = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="nav__container">
      <div className="nav__logo">
        <button type="button" className="logo__atag" onClick={() => scrollTop()}>
          <Logo styling="logo__svg" />
        </button>
      </div>
      <div className="nav__list">
        <a className="nav__lsitem" href="#trainer"> Тренер</a>
        <a className="nav__lsitem" href="#testimonials">Отзывы</a>
        <a className="nav__lsitem" href="#form">Записаться</a>
      </div>
      <SocialBtns />
    </div>
  );
};

export default DescktopNav;
