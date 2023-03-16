import React from "react";
import "../css/Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="work-section">
      <div className="letter">Work</div>
      <h1>My Portfolio</h1>
      <div className="content">
        <p>
          A small gallery of recent projects chosen by me. I've done them all
          together with amazing from companies around the globe. It's only a
          drop in the ocean compared to the entire list. <br />
          Interested to see more more? Visited <Link to="/work">
            my work
          </Link>{" "}
          page.
        </p>
        <Link to="/work">
          <div className="button">
            <button>See more!</button>
            <div className="wipe">
              <p>See more!</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="gallery"></div>
    </div>
  );
};

export default Portfolio;
