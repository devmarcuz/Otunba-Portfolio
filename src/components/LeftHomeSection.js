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
          Hello, I'm <span className="name-span">Otunba-Marcus A. </span>I build
          clean, appealing and functional interfaces which comply with the
          latest standards and great user experiences
        </p>
        <div className="skills">
          <p className="skill">
            Highly skilled at progressive enhancement, design systems & UI
            Engineering.
          </p>
          <p className="skill">
            Skilled software developer with 3+ years of experience delivering
            high-quality solutions using multiple languages and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftHomeSection;
