import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import About from "../components/About2";
import HomeNavBar from "../components/HomeNavBar";
import LeftHomeSection from "../components/LeftHomeSection";
import MenuReponsive from "../components/MenuReponsive";
// import Portfolio from "../components/Portfolio";
import RightHomeMedia from "../components/RightHomeMedia";
import RightHomeSection from "../components/RightHomeSection";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import "../css/Home.css";
import "../css/Main.css";
import Footer from "../components/Footer";
import Portfolio2 from "../components/Portfolio2";
import { GoHome } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { MdWorkspacesOutline, MdImportContacts } from "react-icons/md";

const Home = ({ showAnimation, setShowAnimation }) => {
  const [menuRepo, setMenuRepo] = useState(false);
  const [active, setActive] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

  const workRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (showAnimation)
      document.querySelector(".home").classList.add("overflow-home");
  }, [showAnimation]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (document.querySelector(".ids-ripple")) {
        document.querySelector(".ids-ripple").classList.add("fade");
      }
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    function removeHome() {
      setTimeout(() => {
        document.querySelector(".home").classList.remove("overflow-home");
        if (document.querySelector(".loading-container")) {
          document
            .querySelector(".loading-container")
            .classList.add("remove-load");
          document.querySelector(".loading-container").style.display = "none";
          setShowAnimation(false);
        }
      }, 4000);
    }
    removeHome();
  }, []);

  const navigation = (e) => {
    if (!e.target.classList.contains(".menu")) {
      if (active) {
        setActive(false);
      }
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      const nav = document.querySelector(".home-nav");
      window.addEventListener("scroll", () => {
        if (window.scrollY !== 0) {
          setFixedNav(true);
          nav.classList.add("scroll");
        } else {
          nav.classList.remove("scroll");
          setFixedNav(false);
        }
      });
    }
  }, [location]);

  useEffect(() => {
    const contactElem = document.querySelector(".contact");
    if (location.search === "?scrollToContact=true" && contactElem) {
      contactElem.scrollIntoView({ behaviour: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section === "work" && workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.search]);

  // useEffect(() => {
  //   document.addEventListener("mousemove", (e) => {
  //     const height = circle.offsetHeight;
  //     const width = circle.offsetWidth;

  //     setTimeout(() => {
  //       circle.style.left = `${e.pageX - width / 2}px`;
  //       circle.style.top = `${e.pageY - height / 2}px`;
  //     }, 20);
  //   });
  // }, []);

  return (
    <div className="home" onClick={navigation}>
      {showAnimation && (
        <div className="loading-container">
          <div className="ids-ripple">
            <div></div>
            <div></div>
          </div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      )}
      <HomeNavBar
        setMenuRepo={setMenuRepo}
        menuRepo={menuRepo}
        active={active}
        setActive={setActive}
      />
      <main className="main-home">
        <LeftHomeSection />
        <RightHomeSection />
        <RightHomeMedia />
      </main>
      <MenuReponsive setMenuRepo={setMenuRepo} menuRepo={menuRepo} />
      <Skill skillRef={skillRef} />
      <About aboutRef={aboutRef} skillRef={skillRef} />
      {/* <Portfolio /> */}
      <Portfolio2 workRef={workRef} />
      {/* <BlogComponent /> */}
      <Contact contactRef={contactRef} />
      <div className={`fixed-nav ${fixedNav && "activate"}`}>
        <span
          onClick={() => {
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <GoHome />
        </span>
        <span onClick={() => navigate("/?section=about")}>
          <CiUser />
        </span>
        <span onClick={() => navigate("/?section=work")}>
          <MdWorkspacesOutline />
        </span>
        <span onClick={() => navigate("/?section=contact")}>
          <MdImportContacts />
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
