import React from "react";
import "../css/CircularCursor.css"; // Import the CSS file

function CircularCursor({ cursorPosition, cursorVisible }) {
  return (
    <div
      className="cursor-container"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        opacity: cursorVisible ? 1 : 0,
      }}
    ></div>
  );
}

export default CircularCursor;
