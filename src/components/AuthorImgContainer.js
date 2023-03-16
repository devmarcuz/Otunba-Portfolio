import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/AuthorImgContainer.css";

const AuthorImgContainer = () => {
  const location = useLocation();

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
        <img src="/images/pexels-mikotoraw-photographer-3639496.jpg" alt="" />
      </div>
    </div>
  );
};

export default AuthorImgContainer;
