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
            In building software applications, I'm equipped with just the right
            tools and can absolutely function independently of them to deliver
            fast, resilient solutions optimized for scale performance and
            scalability are priorities on my radar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
