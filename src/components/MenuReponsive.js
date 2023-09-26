import React, { useEffect, useState } from "react";
import HomeNavResponsive from "./HomeNavResponsive";
import "../css/MenuResponsive.css";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubLine,
  RiTwitterLine,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const MenuReponsive = ({ setMenuRepo, menuRepo }) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [linkMenu, setLinkMenu] = useState({
    work: false,
    blog: false,
  });
  const { work, blog } = linkMenu;

  const location = useLocation();

  useEffect(() => {
    const home = document.querySelector(".app");
    const menuR = document.querySelector(".menu-responsive");

    if (menuRepo && window.screen.width <= 678) {
      home.classList.add("overflow");
      menuR.classList.add("overflow");
    } else {
      home.classList.remove("overflow");
      menuR.classList.remove("overflow");
    }
  }, [menuRepo]);

  useEffect(() => {
    if (location.pathname === "/work") {
      setLinkMenu((i) => ({ ...i, work: true }));
    } else if (
      location.pathname === "/shelf" ||
      location.pathname.includes("/shelf")
    ) {
      setLinkMenu((i) => ({ ...i, blog: true }));
    } else {
      setLinkMenu((i) => ({ ...i, work: false, blog: false }));
    }
  }, [location]);

  return (
    <div className={menuRepo ? "menu-responsive active" : "menu-responsive "}>
      <HomeNavResponsive
        setMenuRepo={setMenuRepo}
        menuRepo={menuRepo}
        active={active}
        setActive={setActive}
      />

      <div className={active ? `menu-list active` : `menu-list`}>
        <ul>
          <li className={active ? "active" : ""}>
            <Link to="/?section=work" onClick={() => setMenuRepo(false)}>
              Work
            </Link>
            {/* <Link to={work ? "/" : "/work"}>{work ? "Home" : "Work"}</Link> */}
          </li>
          <li className={active ? "active" : ""}>
            <a
              href="https://drive.google.com/file/d/1FoJ5oBlRCw8VHfOTEcb92P-IycGhUYyE/view?usp=drivesdk"
              target="blank"
            >
              Resume
            </a>
          </li>
          <li className={active ? "active" : ""}>
            <Link to="/?section=contact" onClick={() => setMenuRepo(false)}>
              Contact
            </Link>
            {/* <Link to="/?scrollToContact=true">Contact</Link> */}
          </li>
          <div className={active ? "socials active" : "socials"}>
            <a
              href="https://instagram.com/marcuzdrip"
              target="_blank"
              onMouseEnter={() =>
                setTimeout(() => {
                  setHover(true);
                }, 200)
              }
              onMouseLeave={() =>
                setTimeout(() => {
                  setHover(false);
                }, 200)
              }
            >
              {hover ? <RiInstagramFill /> : <FaInstagram />}
            </a>
            <a
              href="https://linkedin.com/in/ademola-otunba-marcus-742ab1209"
              target="blank"
              onMouseEnter={() =>
                setTimeout(() => {
                  setHover1(true);
                }, 200)
              }
              onMouseLeave={() =>
                setTimeout(() => {
                  setHover1(false);
                }, 200)
              }
            >
              {hover1 ? <FaLinkedin /> : <RiLinkedinFill />}
            </a>
            <a
              href="https://github.com/devmarcuz"
              target="blank"
              onMouseEnter={() =>
                setTimeout(() => {
                  setHover2(true);
                }, 200)
              }
              onMouseLeave={() =>
                setTimeout(() => {
                  setHover2(false);
                }, 200)
              }
            >
              {hover2 ? <FaGithub /> : <RiGithubLine />}
            </a>
            <a
              href="https://twitter.com/marcuzdrip"
              target="blank"
              onMouseEnter={() =>
                setTimeout(() => {
                  setHover3(true);
                }, 200)
              }
              onMouseLeave={() =>
                setTimeout(() => {
                  setHover3(false);
                }, 200)
              }
            >
              {hover3 ? <FaTwitter /> : <RiTwitterLine />}
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MenuReponsive;
