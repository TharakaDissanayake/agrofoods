import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faCommentDots,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

const navbar = (props) => {
  return (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div className="navbar_toggle_button">
          <DrawerToggleButton click={props.drawerToggleClickHanndler} />
        </div>
        <div className="navbar_logo">
          <Link to="/" id="logo">
            AgroFoods.lk
          </Link>
        </div>
        <div className="spacer" />
        <div className="navbar_navigation_items">
          <ul>
            <li>
              <Link className="nav-link" to="/add-ads" id="link">
                <span>
                  <FontAwesomeIcon icon={faAd} />
                </span>
                All ads <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/chat" id="link">
                <span>
                  <FontAwesomeIcon icon={faCommentDots} />
                </span>
                Chat
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/login" id="link">
                <span>
                  <FontAwesomeIcon icon={faSignInAlt} />
                </span>
                Login
              </Link>
            </li>
            <li className="ml-5 mr-5"></li>
            <Link to="/">
              <button className="btn btn-sm btn-warning " id="post-button">
                Post your add
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
