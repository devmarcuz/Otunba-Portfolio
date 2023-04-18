import React, { useEffect, useState } from "react";
import "../css/About.css";
import {
  FaChevronDown,
  FaServer,
  FaReact,
  FaCss3,
  FaSass,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaPython,
} from "react-icons/fa";
import { BsBraces } from "react-icons/bs";
import { DiHtml5 } from "react-icons/di";
import {
  SiMongodb,
  SiJavascript,
  SiPostgresql,
  SiSlideshare,
  SiExpress,
} from "react-icons/si";
import { HiDatabase } from "react-icons/hi";
import { GrMysql } from "react-icons/gr";
import { AiOutlineSolution, AiOutlineTeam } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { GiRelationshipBounds } from "react-icons/gi";

const About = () => {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);

  useEffect(() => {
    const rate = document.querySelectorAll(".rate");
    const range = document.querySelectorAll(".range .bar");
    const rateArr = [];
    if (drop1 || drop2 || drop3 || drop4) {
      Array.from(rate).forEach((rt) => {
        rateArr.push(rt.textContent);
      });
      Array.from(range).forEach((prog, index) => {
        prog.style.width = rateArr[index];
      });
    }
  }, [drop1, drop2, drop3, drop4]);

  const dropClick1 = () => {
    setDrop1(!drop1);

    if (drop2 || drop3 || drop4) {
      setDrop2(false);
      setDrop3(false);
      setDrop4(false);
    }
  };

  const dropClick2 = () => {
    setDrop2(!drop2);

    if (drop1 || drop3 || drop4) {
      setDrop1(false);
      setDrop3(false);
      setDrop4(false);
    }
  };

  const dropClick3 = () => {
    setDrop3(!drop3);

    if (drop2 || drop1 || drop4) {
      setDrop2(false);
      setDrop1(false);
      setDrop4(false);
    }
  };

  const dropClick4 = () => {
    setDrop4(!drop4);

    if (drop2 || drop1 || drop3) {
      setDrop2(false);
      setDrop1(false);
      setDrop3(false);
    }
  };

  return (
    <div className="about-section">
      <div className="left-content">
        <h1>Me, Myself and I</h1>
        <p>
  For over 3 years, I have had the chance to work with a wide range of
  <span> web technologies</span>, gathering valuable experience along the way.
  During this time, I have worked with both companies and individuals, learning
  from some truly talented and driven people.
  <br /><br />
  As of now, I am actively seeking new job opportunities and I am open to working with clients on-site or remotely. I have experience working in various settings and I am excited to explore new opportunities and contribute my skills to a new team.
</p>
      </div>
      <div className="right-content">
        <div className="drop-container">
          <div className="drop">
            <div className="font-title">
              <BsBraces />
            </div>
            <div className="container" onClick={dropClick1}>
              <div className="main">
                <h2>Frontend</h2>
                <p>More than 4 years</p>
              </div>
              <div className="caret">
                <FaChevronDown className={drop1 ? "anime-in" : "anime-out"} />
              </div>
            </div>
          </div>
          {drop1 && (
            <div className="content">
              <div className="tech-stack">
                <div className="text">
                  <FaReact className="icon-tech" /> <p>ReactJS</p>
                </div>
                <div className="text">
                  <DiHtml5 className="icon-tech" /> <p>HTML</p>
                </div>
                <div className="text">
                  <FaCss3 className="icon-tech" /> <p>CSS</p>
                </div>
                <div className="text">
                  <SiJavascript className="icon-tech" /> <p>JavaScript</p>
                </div>
                <div className="text">
                  <FaSass className="icon-tech" /> <p>SASS</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="drop-container">
          <div className="drop">
            <div className="font-title">
              <FaServer />
            </div>
            <div className="container" onClick={dropClick2}>
              <div className="main">
                <h2>Backend</h2>
                <p>More than 3 years</p>
              </div>
              <div className="caret">
                <FaChevronDown className={drop2 ? "anime-in" : "anime-out"} />
              </div>
            </div>
          </div>
          {drop2 && (
            <div className="content">
              <div className="tech-stack">
                <div className="text">
                  <FaNodeJs className="icon-tech" /> <p>NodeJs</p>
                </div>
                <div className="text">
                  <FaPhp className="icon-tech" /> <p>PHP</p>
                </div>
                <div className="text">
                  <FaPython className="icon-tech" /> <p>Python</p>
                </div>
                <div className="text">
                  <SiExpress className="icon-tech" /> <p>Express</p>
                </div>
                <div className="text">
                  <FaLaravel className="icon-tech" /> <p>Laravel</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="drop-container">
          <div className="drop">
            <div className="font-title">
              <HiDatabase />
            </div>
            <div className="container" onClick={dropClick3}>
              <div className="main">
                <h2>Database </h2>
                <p>More than 3 years</p>
              </div>
              <div className="caret">
                <FaChevronDown className={drop3 ? "anime-in" : "anime-out"} />
              </div>
            </div>
          </div>
          {drop3 && (
            <div className="content">
              <div className="tech-stack">
                <div className="text">
                  <SiMongodb className="icon-tech" /> <p>MongoDB</p>
                </div>
                <div className="text">
                  <GrMysql className="icon-tech" /> <p>MySQL</p>
                </div>
                <div className="text">
                  <SiPostgresql className="icon-tech" /> <p>PostgreSQL</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="drop-container">
          <div className="drop">
            <div className="font-title">
              <GiRelationshipBounds />
            </div>
            <div className="container" onClick={dropClick4}>
              <div className="main">
                <h2>Core Skills </h2>
              </div>
              <div className="caret">
                <FaChevronDown className={drop4 ? "anime-in" : "anime-out"} />
              </div>
            </div>
          </div>
          {drop4 && (
            <div className="content">
              <div className="tech">
                <div className="container">
                  <div className="text">
                    <p>Teamwork</p> <AiOutlineTeam className="icon" />
                  </div>
                  <p className="rate">85%</p>
                </div>
                <div className="range">
                  <div className="bar"></div>
                </div>
              </div>
              <div className="tech">
                <div className="container">
                  <div className="text">
                    <p>Problem Solving</p>{" "}
                    <AiOutlineSolution className="icon" />
                  </div>
                  <p className="rate">90%</p>
                </div>
                <div className="range">
                  <div className="bar"></div>
                </div>
              </div>
              <div className="tech">
                <div className="container">
                  <div className="text">
                    <p>Communication Skill</p> <RiTeamFill className="icon" />
                  </div>
                  <p className="rate">65%</p>
                </div>
                <div className="range">
                  <div className="bar"></div>
                </div>
              </div>
              <div className="tech">
                <div className="container">
                  <div className="text">
                    <p>Presentation Skill</p> <SiSlideshare className="icon" />
                  </div>
                  <p className="rate">70%</p>
                </div>
                <div className="range">
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
