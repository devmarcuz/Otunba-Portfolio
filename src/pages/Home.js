import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import BlogComponent from "../components/BlogComponent";
import HomeNavBar from "../components/HomeNavBar";
import LeftHomeSection from "../components/LeftHomeSection";
import MenuReponsive from "../components/MenuReponsive";
import Portfolio from "../components/Portfolio";
import RightHomeMedia from "../components/RightHomeMedia";
import RightHomeSection from "../components/RightHomeSection";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import "../css/Home.css";
import "../css/Main.css";
import Footer from "../components/Footer";
import { getBlogs } from "../redux/actions/blogAction";
import { useDispatch } from "react-redux";

const Home = () => {
  const [menuRepo, setMenuRepo] = useState(false);
  const [active, setActive] = useState(false);
  const [loader, setLoader] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector(".home").classList.add("overflow-home");
  }, []);

  useEffect(() => {
    function removeLoader() {
      setTimeout(() => {
        if (document.querySelector(".ids-ripple")) {
          document.querySelector(".ids-ripple").classList.add("fade");
        }
      }, 2500);
    }
    removeLoader();
  }, []);

  useEffect(() => {
    function removeHome() {
      setTimeout(() => {
        document.querySelector(".home").classList.remove("overflow-home");
        document
          .querySelector(".loading-container")
          .classList.add("remove-load");
        document.querySelector(".loading-container").style.display = "none";
      }, 4000);
    }
    removeHome();
  }, []);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const navigation = (e) => {
    if (!e.target.classList.contains(".menu")) {
      if (active) {
        setActive(false);
      }
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const nav = document.querySelector(".home-nav");
      window.addEventListener("scroll", () => {
        if (window.scrollY !== 0) {
          nav.classList.add("scroll");
        } else {
          nav.classList.remove("scroll");
        }
      });
    }
  }, [location]);

  return (
    <div className="home" onClick={navigation}>
      <div className="loading-container">
        <div className="ids-ripple">
          <div></div>
          <div></div>
        </div>
        <div className="left"></div>
        <div className="right"></div>
      </div>
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
      <Skill />
      <About />
      <Portfolio />
      {/* <BlogComponent /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
