import React from "react";
import "../css/Portfolio.css";
import { Link } from "react-router-dom";

function getRandomSize() {
  return Math.floor(Math.random() * 600 + 200);
}

const Portfolio = () => {
  return (
    <div className="work-section">
      <div className="letter">Work</div>
      <h1>My Portfolio</h1>
      <div className="content">
        <p>
          I have personally selected a small gallery of recent projects that I
          have completed. These projects showcase my skills and capabilities as
          a developer. While this is only a small selection of my work, I
          believe it gives a good representation of the kind of projects that I
          have undertaken. <br />
          Interested to see more more? Visit <Link to="/work">
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
      <div className="gallery">
        <div className="gal">
          <div
            className="img"
            // style={{
            //   width: `${getRandomSize()}`,
            //   height: `${getRandomSize}`,
            // }}
          >
            <img
              src="/images/FreeFrames — Mozilla Firefox 4_3_2023 7_57_51 AM.png"
              alt=""
            />
            <div className="overlay"></div>
            <a
              href="https://free-frames.vercel.app"
              target="blank"
              className="view"
            >
              <p>
                VIEW
                <br /> PROJECT
              </p>
            </a>
          </div>
          <div
            className="img"
            style={{
              width: `${getRandomSize()}`,
              height: `${getRandomSize}`,
            }}
          >
            <img
              src="/images/Glass Brigde - Google Chrome 4_4_2023 9_53_31 PM.png"
              alt=""
            />
            <div className="overlay"></div>
            <a
              href="https://glass-bridge.vercel.app"
              target="blank"
              className="view"
            >
              <p>
                VIEW
                <br /> PROJECT
              </p>
            </a>
          </div>
          <div
            className="img"
            style={{
              width: `${getRandomSize()}`,
              height: `${getRandomSize}`,
            }}
          >
            <img
              src="/images/SWIFT Chat App - Google Chrome 4_7_2023 6_18_41 PM.png"
              alt=""
            />
            <div className="overlay"></div>
            <a
              href="https://swift-chat-apps.netlify.app"
              target="blank"
              className="view"
            >
              <p>
                VIEW
                <br /> PROJECT
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
