import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/AuthorImgContainer.css";
import { useAnimation, motion } from "framer-motion";

const AuthorImgContainer = () => {
  const location = useLocation();

  const animation = useAnimation();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX - 100;
      const y = event.clientY - 100;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      const nav = document.querySelector(".author-img-container");
      window.addEventListener("scroll", () => {
        if (window.scrollY !== 0) {
          nav.classList.add("scroll");
        } else {
          nav.classList.remove("scroll");
        }
      });
    }
  }, [location]);

  return (
    <div className="author-img-container">
      <div className="img-border">
        <img src="/images/otunbabg.jpg" alt="" />
      </div>
    </div>
  );
};

export default AuthorImgContainer;
