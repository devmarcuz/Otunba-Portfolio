import React, { useEffect, useRef } from "react";
import { CgDarkMode } from "react-icons/cg";
import "../css/main-hero.css";
import { Link } from "react-router-dom";
import GrabMagnetic from "./GrabMagnetic";
import { PiReadCvLogoBold } from "react-icons/pi";
import Framer from "./CursorMagnetic";

const MainHero = ({ stickyElement }) => {
  return (
    <div className="main-hero">
      <nav>
        <GrabMagnetic>
          <div className="left-nav">
            <Link to="/" className="h2-container">
              <h2 className="logo-name">otunba Ademola Otunba-Marcus</h2>
            </Link>
          </div>
        </GrabMagnetic>

        <GrabMagnetic>
          <Link to="" target="_blank" className="icon" ref={stickyElement}>
            <PiReadCvLogoBold />
          </Link>
        </GrabMagnetic>
      </nav>

      <div className="main-hero-container">
        <div className="left-home">
          <div className="content">
            <h1>
              SOFTWARE <br /> DEVELOPER
              <span>.</span>
            </h1>
            <p className="info">
              Hello, I'm <span className="name-span">Otunba-Marcus A.</span> I
              craft sleek and intuitive interfaces to ensure an exceptional user
              experience.
            </p>
            <div className="skills">
              <p className="skill">
                Experienced in progressive enhancement, design systems, and UI
                development.
              </p>
              <p className="skill">
                Over 3 years experienced software developer proficient in
                multiple languages and frameworks.
              </p>
            </div>
          </div>
        </div>
        <div className="right-home">
          <div className="img-border"></div>
          <div className="img-container">
            <img src="/images/Otunba Marcus.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
