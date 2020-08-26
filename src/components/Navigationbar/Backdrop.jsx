import React from "react";
import "./backdrop.css";
const bcakdrop = (props) => {
  return <div className="backdrop" onClick={props.click} />;
};

export default bcakdrop;
