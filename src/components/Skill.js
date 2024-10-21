import React, { useState } from "react";
import "../css/Skill.css";
import CircularCursor from "./CircularCursor";

const Skill = ({ skillRef }) => {
  const [hovered, setHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // Handle mouse move event to update cursor position
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  return (
    <div className="skill-section-container">
      <div
        className="skill-section"
        onMouseMove={handleMouseMove}
        ref={skillRef}
      >
        {/* <CircularCursor
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
        cursorVisible={cursorVisible}
      /> */}
        <div className="letter">SKILL</div>
        <div className="left-content">
          <h1
            className={`${cursorVisible ? "remove-cursor" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Design
          </h1>
          <p>
            I design user interfaces by adjusting stylesheets and layouts for
            fluent user experiences while maintaining an attractive appearance.
          </p>
        </div>
        <div className="right-content">
          <div className="content">
            <h1
              className={`${cursorVisible ? "remove-cursor" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Engineering
            </h1>
            <p>
              I have the necessary tools for building software applications and
              can work independently to deliver quick, reliable solutions. I
              prioritize scalability and performance when developing
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
