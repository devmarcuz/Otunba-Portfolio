import React, { useEffect } from "react";
import "../css/LeftHomeSection.css";
import { useLocation } from "react-router-dom";

const LeftHomeSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const nav = document.querySelector(".left-home");
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
    <div className="left-home">
      <div className="content">
        <h1>
          SOFTWARE <br /> DEVELOPER
          <span>.</span>
        </h1>
        <p className="info">
          Hello, I'm <span className="name-span">Otunba-Marcus A.</span> I craft
          sleek and intuitive interfaces to ensure an exceptional user
          experience.
        </p>
        <div className="skills">
          <p className="skill">
            Experienced in progressive enhancement, design systems, and UI
            development.
          </p>
          <p className="skill">
            Over 3 years experienced software developer proficient in multiple
            languages and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftHomeSection;
