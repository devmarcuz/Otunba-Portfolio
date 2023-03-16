import React, { useEffect, useState } from "react";
import "../css/HomeNavResponsive.css";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const HomeNavResponsive = ({ setMenuRepo, menuRepo }) => {
  const [bgBool, setBgBool] = useState(false);
  const [active, setActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    location.pathname === "/work" ? setBgBool(true) : setBgBool(false);

    const menuList = document.querySelector(".menu-list");
    const times = document.querySelector(".times");

    if (location.pathname === "/work") {
      setBgBool(true);
      if (menuList) {
        menuList.style.background = "#ffd900a1";
      }

      if (active) {
        times.style.color = "black";
      }
    } else {
      setBgBool(false);
    }
  }, [location, active]);

  const burger = () => {
    setMenuRepo(!menuRepo);
    setActive(!active);
  };

  return (
    <div
      className={
        bgBool ? "home-nav-responsive location" : "home-nav-responsive"
      }
      // undo the remaining things needed to handle the palace
    >
      <div className={bgBool ? "logo location" : "logo"}>
        <Link to="/" className={bgBool ? "h2 location" : "h2"}>
          <h2>otunba</h2>
        </Link>
      </div>
      <div className={bgBool ? "menu location" : "menu"}>
        {/* {!active ? (
          <div className="burger" onClick={burger}>
            <div className={bgBool ? "bar-1 location" : "bar-1"}></div>
            <div className={bgBool ? "bar-2 location" : "bar-2"}></div>
          </div>
        ) : (
          <FaTimes
            // className="burger times"
            className={bgBool ? "burger times location" : "burger times"}
            onClick={burger}
          />
        )} */}

        <FaTimes
          className={bgBool ? "burger times location" : "burger times"}
          onClick={burger}
        />
      </div>
    </div>
  );
};

export default HomeNavResponsive;
