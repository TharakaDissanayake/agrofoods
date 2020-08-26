import React from "react";
import "./drawerToggleButton.css";

const drawerToggleButton = (props) => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button_line"></div>
      <div className="toggle-button_line"></div>
      <div className="toggle-button_line"></div>
    </button>
  );
};

export default drawerToggleButton;
