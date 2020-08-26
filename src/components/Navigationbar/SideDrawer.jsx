import React from "react";
import "./sideDrawer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faCommentDots,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

const SideDrawer = (props) => {
  let drawerClass = ["side-drawer"];
  if (props.show) {
    drawerClass = ["side-drawer open"];
  }
  return (
    <nav className={drawerClass.join(" ")}>
      <div className="logo">Agrofoods.lk</div>
      <ul>
        <li>
          <Link to="/add-ads">
            <span>
              <FontAwesomeIcon icon={faAd} />
            </span>
            All ads <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <span>
              <FontAwesomeIcon icon={faCommentDots} />
            </span>
            Chat
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span>
              <FontAwesomeIcon icon={faSignInAlt} />
            </span>
            Login
          </Link>
        </li>
        <div className="footer">
          Buy and sell farmers products through agro foods,lk
        </div>
      </ul>
    </nav>
  );
};

export default SideDrawer;
