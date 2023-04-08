import React, { useState } from "react";
import HomeNavBar from "../components/HomeNavBar";
import MenuReponsive from "../components/MenuReponsive";
import Footer from "../components/Footer";
import { FaGithubAlt } from "react-icons/fa";
import "../css/Work.css";

const Work = () => {
  const [menuRepo, setMenuRepo] = useState(false);
  const [active, setActive] = useState(false);

  const navigation = (e) => {
    if (!e.target.classList.contains(".menu")) {
      if (active) {
        setActive(false);
      }
    }
  };

  return (
    <div className="my-work" onClick={navigation}>
      <HomeNavBar
        setMenuRepo={setMenuRepo}
        menuRepo={menuRepo}
        active={active}
        setActive={setActive}
      />
      <MenuReponsive setMenuRepo={setMenuRepo} menuRepo={menuRepo} />

      <h2 className="head">/work.</h2>
      <p className="text">Selected projects I've worked in the past.</p>

      <section>
        <div className="projects">
          <div className="project">
            <img
              src="/images/FreeFrames — Mozilla Firefox 4_3_2023 7_57_51 AM.png"
              alt=""
            />
            <div className="overlay"></div>
            <div className="title-overlay">
              <h3>FreeFrames</h3>
              <p>
                An application that offers free high quality images that can be
                used for any purpose.
              </p>
              <div className="technologies">
                <div className="stack">
                  <span>React.js</span> <span>SCSS</span>
                </div>
                <a
                  href="https://github.com/devmarcuz/Free-Frames"
                  target="blank"
                >
                  <FaGithubAlt className="git" />
                </a>
              </div>
            </div>
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
          <div className="project">
            <img
              src="/images/Glass Brigde - Google Chrome 4_4_2023 9_53_31 PM.png"
              alt=""
            />
            <div className="overlay"></div>
            <div className="title-overlay">
              <h3>Glass Bridge</h3>
              <p>
                A web application that stimulates a glass brigde over a
                beautiful valley.
              </p>
              <div className="technologies">
                <div className="stack">
                  <span>React.js</span> <span>MongoDB</span>{" "}
                  <span>Node.js</span>
                </div>
                <a
                  href="https://github.com/devmarcuz/Glass-Bridge"
                  target="blank"
                >
                  <FaGithubAlt className="git" />
                </a>
              </div>
            </div>
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
          <div className="project">
            <img
              src="/images/SWIFT Chat App - Google Chrome 4_7_2023 6_18_41 PM.png"
              alt=""
            />
            <div className="overlay"></div>
            <div className="title-overlay">
              <h3>Swift Chat</h3>
              <p>
                This is a chat application that allows users to create chat
                rooms and communicate with other users in real-time.
              </p>
              <div className="technologies">
                <div className="stack">
                  <span>React.js</span> <span>MongoDB</span>{" "}
                  <span>Node.js</span> <span>Socket.IO</span>
                </div>
                <a
                  href="https://github.com/devmarcuz/SWIFT-Chat-App-Frontend"
                  target="blank"
                >
                  <FaGithubAlt className="git" />
                </a>
              </div>
            </div>
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
      </section>

      <Footer />
    </div>
  );
};

export default Work;
