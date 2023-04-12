import React from "react";
import "../css/Skill.css";

const Skill = () => {
  return (
    <div className="skill-section">
      <div className="letter">SKILL</div>
      <div className="left-content">
        <h1>Design</h1>
        <p>
          I design user interfaces by adjusting stylesheets and layouts for fluent user experiences while maintaining an attractive appearance.
        </p>
      </div>
      <div className="right-content">
        <div className="content">
          <h1>Engineering</h1>
          <p>
            I have the necessary tools for building software applications and can work independently to deliver quick, reliable solutions. I prioritize scalability and performance when developing applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
