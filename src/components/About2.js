import React, { useEffect, useRef, useState } from "react";
import "../css/About2.css";
import { FaHandHolding } from "react-icons/fa";
import Lottie, { useLottie } from "lottie-react";
import SkillAnime from "../lotties/Animation - 1696856374590.json";

const About = ({ aboutRef }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const leftContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutRef.current;
      const leftContent = leftContentRef.current;
      const skillsContainer = aboutSection.querySelector(".skills");
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (!isAnimating) {
        if (scrollTop >= aboutSection.offsetTop) {
          // When scrolling down, fix the left content and animate skills
          setIsFixed(true);
          setIsAnimating(true);
          const skills = skillsContainer.querySelectorAll(".skill");
          const speedMultiplier = 0.05; // Adjust the animation speed as needed

          skills.forEach((skill, index) => {
            const translateY =
              -(scrollTop - aboutSection.offsetTop) *
              (index + 1) *
              speedMultiplier;
            skill.style.transform = `translateY(${translateY}px)`;
          });
        }
      }

      if (
        scrollTop >=
        aboutSection.offsetTop + aboutSection.offsetHeight - window.innerHeight
      ) {
        // When skills are done scrolling, remove the fixed position

        setIsFixed(false);
        setIsAnimating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef, isAnimating]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      //   const scrollTop = window.scrollY;
      console.log(leftContentRef.current.offsetTop, "offsettop");
      console.log(aboutRef.current.offsetTop, "about");
      console.log(scrollTop, "window");

      if (aboutRef.current.offsetTop + 100 <= scrollTop) {
        // console.log("yes");
        leftContentRef.current.classList.add("left-fixed");
        // console.log(aboutRef.current.offsetTop, "about");
        aboutRef.current.classList.add("about-fixed");
        if (aboutRef.current.offsetTop > scrollTop) {
          leftContentRef.current.classList.remove("left-fixed");
          aboutRef.current.classList.remove("about-fixed");
        }
      } else {
        leftContentRef.current.classList.remove("left-fixed");
        aboutRef.current.classList.remove("about-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [leftContentRef, aboutRef]);

  const options = {
    animationData: SkillAnime,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className={`about-section ${isFixed ? "fixed" : ""}`} ref={aboutRef}>
      <div className="left-content" ref={leftContentRef}>
        <h1>Me, Myself and I</h1>
        <p>
          For over 3 years, I have had the chance to work with a wide range of
          <span> web technologies</span>, gathering valuable experience along
          the way. During this time, I have worked with both companies and
          individuals, learning from some truly talented and driven people.
          <br />
          <br />
          As of now, I am actively seeking new job opportunities and I am open
          to working with clients on-site or remotely. I have experience working
          in various settings and I am excited to explore new opportunities and
          contribute my skills to a new team.
        </p>
      </div>
      <div className="right-content">
        <div className="skills">
          <div className="skill">Javascript</div>
          <div className="skill">flutter</div>
          <div className="skill">ReactJS</div>
          <div className="skill">NextJS</div>
          <div className="skill">SASS</div>
          <div className="skill">Express</div>
          <div className="skill">NodeJS</div>
          <div className="skill">MongoDB</div>
          <div className="skill">PostgreSQL</div>
          <div className="skill">Python</div>
        </div>

        {/* <FaHandHolding /> */}
        {/* <> {View}</> */}
        <div className="container-anima">
          <Lottie animationData={SkillAnime} />
        </div>
      </div>
    </div>
  );
};

export default About;
