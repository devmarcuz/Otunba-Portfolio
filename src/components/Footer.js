/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  // FaTimes,
} from "react-icons/fa";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubLine,
  RiTwitterLine,
} from "react-icons/ri";
// import { CgMenuMotion } from "react-icons/cg";
import "../css/Footer.css";

const Footer = () => {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  return (
    <div className="footer">
      <div className="contact-view">
        <h2>SAY HELLO</h2>
        <a href="mailto:otunbamarcusademola@gmail.com" className="ctc">
          <HiMail className="icon" />
          <p>otunbamarcusademola@gmail.com</p>
        </a>
        <a href="tel:+2348035915522" className="ctc">
          <ImPhone className="icon" />
          <p>+234 803 5915 522</p>
        </a>
        <div className={"socials"}>
          <a
            href="https://instagram.com/marcuzdrip"
            target="_blank"
            onMouseEnter={() =>
              setTimeout(() => {
                setHover(true);
              }, 200)
            }
            onMouseLeave={() =>
              setTimeout(() => {
                setHover(false);
              }, 200)
            }
          >
            {hover ? <RiInstagramFill /> : <FaInstagram />}
          </a>
          <a
            href="https://linkedin.com/in/ademola-otunba-marcus-742ab1209"
            target="blank"
            onMouseEnter={() =>
              setTimeout(() => {
                setHover1(true);
              }, 200)
            }
            onMouseLeave={() =>
              setTimeout(() => {
                setHover1(false);
              }, 200)
            }
          >
            {hover1 ? <FaLinkedin /> : <RiLinkedinFill />}
          </a>
          <a
            href="https://github.com/devmarcuz"
            target="blank"
            onMouseEnter={() =>
              setTimeout(() => {
                setHover2(true);
              }, 200)
            }
            onMouseLeave={() =>
              setTimeout(() => {
                setHover2(false);
              }, 200)
            }
          >
            {hover2 ? <FaGithub /> : <RiGithubLine />}
          </a>
          <a
            href="https://twitter.com/marcuzdrip"
            target="blank"
            onMouseEnter={() =>
              setTimeout(() => {
                setHover3(true);
              }, 200)
            }
            onMouseLeave={() =>
              setTimeout(() => {
                setHover3(false);
              }, 200)
            }
          >
            {hover3 ? <FaTwitter /> : <RiTwitterLine />}
          </a>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Otunba. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
