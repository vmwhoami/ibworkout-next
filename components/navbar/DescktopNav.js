import SocialBtns from '../SocialBtns';
import { Logo } from '../Svgs';
const DescktopNav = () => (
  <div className="nav__container">
    <div className="nav__logo">
      <a className="logo__atag" href="#">
        <Logo styling="logo__svg" />
      </a>
    </div>
    <div className="nav__list">
      <a className="nav__lsitem" href="#trainer"> Тренер</a>
      <a className="nav__lsitem" href="#testimonials">Отзывы</a>
      <a className="nav__lsitem" href="#form">Записаться</a>
    </div>
    <SocialBtns />
  </div>
);

export default DescktopNav;
