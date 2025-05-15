import { Instagram, Vk, FaceBk } from "./Svgs";

const SocialBtns = () => (
  <div className="nav__socialbtns">
    <a
      className="nav__roundbtn"
      target="blank"
      href="https://www.instagram.com/innabogdan/"
    >
      <Instagram styling="nav__svg" />
    </a>
    <a className="nav__roundbtn" target="blank" href="http://">
      <Vk styling="nav__svg" />
    </a>
    <a
      className="nav__roundbtn"
      target="blank"
      href="https://www.facebook.com/profile.php?id=100026188263111"
    >
      <FaceBk styling="nav__svg" />
    </a>
  </div>
);

export default SocialBtns;
