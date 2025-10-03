import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import "../css/Portfolio2.css";

/* =========================
   Portfolio Projects (Data)
========================= */
const PORTFOLIO = [
  {
    id: "habitat",
    title: "Habitat",
    desc: "Habitat’s website lets prospects explore coastal farm plots and amenities",
    stack: ["NextJs", "Google Map Api", "Framer Motion", "Gsap"],
    live: "https://www.habitatdevelopers.co/",
  },
  {
    id: "yamify",
    title: "Yamify",
    desc: "Yamify lets you launch and run ai tools while saving 60% on costs",
    stack: ["NextJs", "Kubernetes", "NestJs"],
    live: "https://yamify.co/",
  },
  {
    id: "srotimi",
    title: "Srotimi",
    desc: "Designing usability for Web3, AI and TechStartups.",
    stack: ["Reactjs", "SCSS", "Framer Motion"],
    live: "https://srotimi.design/",
  },
  {
    id: "indexwallets",
    title: "Index Wallets",
    desc: "Index Wallets provides zero-fee payments for local businesses.",
    stack: ["NextJs", "SCSS", "Framer Motion"],
    live: "https://www.indexwallets.org/",
  },
  {
    id: "blueprint",
    title: "Blueprint",
    desc: "Transforming Ideas into Digital Solutions",
    stack: ["Reactjs", "SCSS", "Framer Motion"],
    live: "https://www.chooseblueprint.com/",
  },
  {
    id: "immunocore",
    title: "Immunocore",
    desc: "Immunocore developed world's first TCR therapy.",
    stack: ["Reactjs", "SCSS", "NodeJs"],
    live: "https://www.immunocore.us/",
  },
  {
    id: "endo",
    title: "Endo",
    desc: "Endo fosters better health, brighter future.",
    stack: ["Nextjs", "SCSS", "Nodejs"],
    live: "https://www.endotherapeutics.us",
  },
  {
    id: "getlinked",
    title: "GetLinked",
    desc: "GetLinked is a design, development and concept hackathon.",
    stack: ["Reactjs", "SCSS", "GSAP", "API"],
    live: "https://hackathon.getlinked.ai/",
  },
  {
    id: "ecom-api",
    title: "Ecommerce Platform API",
    desc: "This is the backend for an ecommerce platform.",
    stack: ["Node.js", "Express.js", "MongoDB", "Stripe"],
    repo: "https://github.com/devmarcuz/ecommerce-platform-backend",
  },
];

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
            {PORTFOLIO.map((p) => (
              <div className="proj" key={p.id}>
                <h3>{p.title}</h3>

                <div className="stack">
                  {p.stack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <p className="desc">{p.desc}</p>

                <div className="end">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="view"
                      aria-label={`Open ${p.title} website`}
                      title="Open website"
                    >
                      <AiOutlineGlobal />
                      <p>View</p>
                    </a>
                  )}

                  {p.repo && (
                    <a
                      className="git-container"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.title} GitHub repository`}
                      title="View source on GitHub"
                    >
                      <FaGithubAlt className="git" />
                    </a>
                  )}

                  <div className="overlay"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio2;
