import React from "react";
import "../css/ErrorMessage.css";

export const ErrorMessage = ({ error }) => {
  return <div className="error-message">{error}</div>;
};

export const SuccessMessage = ({ success }) => {
  return <div className="success-message">{success}</div>;
};
