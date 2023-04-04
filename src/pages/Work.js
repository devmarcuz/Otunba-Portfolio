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
          <a
            href="https://free-frames.vercel.app"
            target="blank"
            className="project"
          >
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
          </a>
          <div className="project">
            <img src="/images/pexels-bryan-catota-3756766.jpg" alt="" />
            <div className="overlay"></div>
            <div className="title-overlay">
              <h3>Connectar</h3>
            </div>
            <div className="view">
              <p>
                VIEW
                <br /> PROJECT
              </p>
            </div>
          </div>
          <div className="project">
            <img src="/images/pexels-bryan-catota-3756766.jpg" alt="" />
            <div className="overlay"></div>
            <div className="title-overlay">
              <h3>Connectar</h3>
            </div>
            <div className="view">
              <p>
                VIEW
                <br /> PROJECT
              </p>
            </div>
          </div>
          <div className="project">
            <img src="/images/pexels-bryan-catota-3756766.jpg" alt="" />
            <div className="overlay"></div>
            <div className="title-overlay">
              <h3>Connectar</h3>
            </div>
            <div className="view">
              <p>
                VIEW
                <br /> PROJECT
              </p>
            </div>
          </div>
          <div className="project">
            <img src="/images/pexels-bryan-catota-3756766.jpg" alt="" />
            <div className="overlay"></div>
            <div className="title-overlay">
              <h3>Connectar</h3>
            </div>
            <div className="view">
              <p>
                VIEW
                <br /> PROJECT
              </p>
            </div>
          </div>
          <div className="project">
            <img src="/images/pexels-bryan-catota-3756766.jpg" alt="" />
            <div className="overlay"></div>
            <div className="title-overlay">
              <h3>Connectar</h3>
            </div>
            <div className="view">
              <p>
                VIEW
                <br /> PROJECT
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
