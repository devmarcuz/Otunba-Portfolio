import React from "react";
import "../css/RightHomeSection.css";
import AuthorImgContainer from "./AuthorImgContainer";

const RightHomeSection = () => {
  return (
    <div className="right-home">
      <div className="shapes">
        <div className="square"></div>
        <div className="poly"></div>
        <div className="poly"></div>
        <div className="poly"></div>
        <div className="poly"></div>
      </div>

      <AuthorImgContainer />
    </div>
  );
};

export default RightHomeSection;
