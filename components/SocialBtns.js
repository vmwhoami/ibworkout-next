import { Instagram, Vk, FaceBk } from "./Svgs";
import Link from "next/link";

const SocialBtns = () => (
  <div className="nav__socialbtns">
    <Link className="nav__roundbtn"
      target="blank"
      href="https://www.instagram.com/innabogdan/"
    >
      <Instagram styling="nav__svg" />
    </Link>
    <Link className="nav__roundbtn" target="blank" href="http://">
      <Vk styling="nav__svg" />
    </Link>
    <Link
      className="nav__roundbtn"
      target="blank"
      href="https://www.facebook.com/profile.php?id=100026188263111"
    >
      <FaceBk styling="nav__svg" />
    </Link>
  </div>
);

export default SocialBtns;
