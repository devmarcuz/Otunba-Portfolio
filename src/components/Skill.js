import React from "react";
import "../css/Skill.css";

const Skill = () => {
  return (
    <div className="skill-section">
      <div className="letter">SKILL</div>
      <div className="left-content">
        <h1>Design</h1>
        <p>
          I'm probably not the typical designer positioned behind an illustrator
          artboard adjusting pixels, but I design. Immersed in stylesheets
          tweaking font sizes and comtemplating layouts is where you'll find me.
          I'm commited to creating fluent user experiences while staying
          fashionable.
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
