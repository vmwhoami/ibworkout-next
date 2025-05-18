import Link from 'next/link';
import { i } from 'motion/react-client';
import {
  Logo, Instagram, Vk, FaceBk,
} from '../Svgs';


const Footer = () => (
  <footer className="footer">
    <div className="footer__social">
      <div className="footer__logo">
        <button type="button" aria-label="footer-logo" className="footer__atag" target="blank" href="#">
          <Logo styling="footer__svglogo" />
        </button>
      </div>
      <div className="footer__socialbtns">
        <Link className="footer__roundbtn" target="blank" href="https://www.instagram.com/innabogdan/">
          <Instagram styling="footer__svg" />
        </Link>
        <Link className="footer__roundbtn" target="blank" href="http://">
          <Vk styling="footer__svg" />
        </Link>
        <Link className="footer__roundbtn" target="blank" href="https://www.facebook.com/profile.php?id=100026188263111">
          <FaceBk styling="footer__svg" />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
