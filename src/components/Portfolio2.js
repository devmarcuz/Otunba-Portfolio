import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../css/Portfolio2.css";

const Portfolio2 = ({ workRef }) => {
  return (
    <div className="portfolio-section-container">
      <div className="portofolio-section" ref={workRef}>
        <div className="letter">Work</div>
        <h1>My Portfolio</h1>
        <div className="content">
          <p>
            I have personally selected a small gallery of recent projects that I
            have completed. These projects showcase my skills and capabilities
            as a developer. While this is only a small selection of my work, I
            believe it gives a good representation of the kind of projects that
            I have undertaken.
          </p>
        </div>
        <section>
          <div className="projects">
            <div className="proj">
              <h3>Blueprint</h3>
              <div className="stack">
                <span>Reactjs</span>
                <span>SCSS</span>
                <span>Framer Motion</span>
              </div>
              <p className="desc">Transforming Ideas into Digital Solutions</p>
              <div className="end">
                <a
                  href="https://www.chooseblueprint.com/"
                  target="blank"
                  className="view"
                >
                  <AiOutlineGlobal /> <p>View</p>
                </a>
                <div className="overlay"></div>
              </div>
            </div>
            <div className="proj">
              <h3>Immunocore</h3>
              <div className="stack">
                <span>Reactjs</span>
                <span>SCSS</span>
                <span>NodeJs</span>
              </div>
              <p className="desc">
                Immunocore developed world's first TCR therapy.
              </p>
              <div className="end">
                <a
                  href="https://www.immunocore.us/"
                  target="blank"
                  className="view"
                >
                  <AiOutlineGlobal /> <p>View</p>
                </a>
                <div className="overlay"></div>
              </div>
            </div>
            <div className="proj">
              <h3>Endo</h3>
              <div className="stack">
                <span>Nextjs</span>
                <span>SCSS</span>
                <span>Nodejs</span>
              </div>
              <p className="desc">
                Endo fosters better health, brighter future.
              </p>
              <div className="end">
                <a
                  href="https://www.endotherapeutics.us"
                  target="blank"
                  className="view"
                >
                  <AiOutlineGlobal /> <p>View</p>
                </a>
                <div className="overlay"></div>
              </div>
            </div>
            <div className="proj">
              <h3>GetLinked</h3>
              <div className="stack">
                <span>Reactjs</span>
                <span>SCSS</span>
                <span>GSAP</span>
                <span>API</span>
              </div>
              <p className="desc">
                GetLinked is a design, development and concept hackathon.
              </p>
              <div className="end">
                <a
                  href="https://hackathon.getlinked.ai/"
                  target="blank"
                  className="view"
                >
                  <AiOutlineGlobal /> <p>View</p>
                </a>
                <div className="overlay"></div>
              </div>
            </div>
            <div className="proj">
              <h3>Ecommerce Platform API</h3>
              <div className="stack">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Stripe</span>
              </div>
              <p className="desc">
                This is the backend for an ecommerce platform.
              </p>
              <div className="end">
                <a
                  className="git-container"
                  href="https://github.com/devmarcuz/ecommerce-platform-backend"
                  target="blank"
                >
                  <FaGithubAlt className="git" />
                </a>
                <div className="overlay"></div>
              </div>
            </div>
            {/* <div className="project">
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
                This is a chat application that allows users communicate with
                users in real-time.
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
          <div className="project">
            <img
              src="/images/AskAI - Google Chrome 4_12_2023 5_45_10 PM.png"
              alt=""
            />
            <div className="overlay"></div>
            <div className="title-overlay">
              <h3>AskAI</h3>
              <p>
                It allows users to ask questions and get responses by the AI.
              </p>
              <div className="technologies">
                <div className="stack">
                  <span>React.js</span> <span>OpenAI</span> <span>Node.js</span>{" "}
                  <span>SASS</span>
                </div>
                <a href="https://github.com/devmarcuz/AskAI" target="blank">
                  <FaGithubAlt className="git" />
                </a>
              </div>
            </div>
            <a
              href="https://ask-ai-devmarcuz.vercel.app"
              target="blank"
              className="view"
            >
              <p>
                VIEW
                <br /> PROJECT
              </p>
            </a>
          </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio2;
