import React, { useEffect, useRef, useState } from "react";
import "../css/HomeNavBar.css";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubLine,
  RiTwitterLine,
} from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const HomeNavBar = ({ setMenuRepo, menuRepo, setActive, active }) => {
  const [bgBool, setBgBool] = useState(false);
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
  const logoRef = useRef();

  useEffect(() => {
    location.pathname === "/work" ? setBgBool(true) : setBgBool(false);

    const menuList = document.querySelector(".menu .menu-list");
    const times = document.querySelector(".menu .times");

    if (
      location.pathname === "/work" ||
      location.pathname === "/shelf" ||
      location.pathname.includes("/shelf")
    ) {
      setBgBool(true);
      if (menuList) {
        menuList.style.background = "#ffd900a1";
      }

      if (active) {
        times.style.color = "black";
      }
    } else {
      setBgBool(false);
    }
  }, [location, active]);

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

  const burger = () => {
    setMenuRepo(!menuRepo);

    if (window.screen.width > 678) {
      setActive((props) => !props);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    if (window.screen.width <= 678) {
      setActive(false);
    }
  }, [window]);

  useEffect(() => {
    let button = logoRef.current;
    button.addEventListener("mousemove", (e) => {
      const position = button.getBoundingClientRect();
      // Get the correct position of cursor when hover to the button
      const x = e.pageX - position.left - position.width / 2;
      const y = e.pageY - position.top - position.height / 2;

      button.classList.add("no-wrap");
      button.children[0].classList.add("wrap");

      console.log(button);
      // When cursor is center of button it will be 0,0
      // set the button position
      button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      // same thing with the child
      // button.children[0].style.transform = `translate(${x * 0.2}px, ${
      //   y * 0.2
      // }px)`;
      // pointer.classList.add("buttonHover");
    });
    button.addEventListener("mouseout", (e) => {
      button.style.transform = `translate(0px, 0px)`;
      button.children[0].classList.remove("wrap");
      button.classList.remove("no-wrap");
      //  button.children[0].style.transform = `translate(0px, 0px)`;
      //  pointer.classList.remove("buttonHover");
    });
  }, [logoRef]);

  useEffect(() => {
    if (window.matchMedia("(max-width: 500px)").matches) {
      document.querySelector(".logo-name").style.display = "none";
      // Your code here for screens smaller than or equal to 500 pixels
    } else {
      document.querySelector(".logo-name-1").style.display = "none";
    }
  }, []);

  return (
    <div className={bgBool ? "home-nav location" : "home-nav"}>
      <div className={bgBool ? "logo location" : "logo"}>
        <Link to="/" ref={logoRef} className={bgBool ? "h2 location" : "h2"}>
          <h2 className="logo-name">otunba Ademola Otunba-Marcus</h2>
          <h2 className="logo-name-1">otunba</h2>
        </Link>
      </div>
      <div className={bgBool ? "menu location" : "menu"}>
        {/* {!active ? (
          <div className="burger" onClick={burger}>
            <div className={bgBool ? "bar-1 location" : "bar-1"}></div>
            <div className={bgBool ? "bar-2 location" : "bar-2"}></div>
          </div>
        ) : (
          <FaTimes
            // className="burger times"
            className={bgBool ? "burger times location" : "burger times"}
            onClick={burger}
          />
        )} */}
        {!active ? (
          <div className="burger font" onClick={burger}>
            <CgMenuMotion className={bgBool ? "bar location" : "bar"} />
          </div>
        ) : (
          <FaTimes
            className={
              bgBool ? "burger times location font" : "burger times font"
            }
            onClick={burger}
          />
        )}

        <ul className={active ? `menu-list active` : `menu-list`}>
          <li className={!active ? "active" : ""}>
            <Link to="/?section=work">Work</Link>
            {/* <Link to={work ? "/" : "/work"}>{work ? "Home" : "Work"}</Link> */}
          </li>
          {/* <li className={!active ? "active" : ""}>
            <Link to={blog ? "/" : "/shelf"}>{blog ? "Home" : "Blog"}</Link>
          </li> */}
          <li className={!active ? "active" : ""}>
            <a
              href="https://drive.google.com/file/d/1FoJ5oBlRCw8VHfOTEcb92P-IycGhUYyE/view?usp=drivesdk"
              target="blank"
            >
              Resume
            </a>
          </li>
          <li className={!active ? "active" : ""}>
            <Link to="/?section=contact">Contact</Link>
          </li>
          <div className={!active ? "socials active" : "socials"}>
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

export default HomeNavBar;
