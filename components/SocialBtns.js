import { Instagram, Vk, FaceBk } from "./Svgs";
import Link from "next/link";

const SocialBtns = () => (
  <div className="nav__socialbtns">
    <Link
      className="nav__roundbtn"
      target="_blank"
      href="https://www.instagram.com/innabogdan/"
    >
      <Instagram styling="nav__svg" />
    </Link>

    {/* Fixed VK link with valid URL */}
    <Link
      className="nav__roundbtn"
      target="_blank"
      href="https://vk.com/your-actual-profile" // Replace with real URL
    >
      <Vk styling="nav__svg" />
    </Link>

    <Link
      className="nav__roundbtn"
      target="_blank"
      href="https://www.facebook.com/profile.php?id=100026188263111"
    >
      <FaceBk styling="nav__svg" />
    </Link>
  </div>
);

export default SocialBtns;
