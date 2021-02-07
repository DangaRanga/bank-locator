import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import * as icons from "../../icons/icons";
import colours from "../../../global/colours";
import { useState } from "react";

interface MenuProps {}

interface MenuState {}

function Menu() {
  const [openNav, navToggle] = useState(false);

  const handleNavToggle = () => {
    navToggle(!openNav);
  };

  // Appends the active class to the nav items
  const renderClasses = () => {
    let classes = "nav-items";
    if (openNav) {
      classes += " active";
    }
    return classes;
  };

  return (
    <div>
      <div onClick={handleNavToggle}>{icons.Menu(colours.primary, "24px")}</div>
      <ul className={renderClasses()}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/banks">
          <li>Nearby Banks</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/signup">
          <li>Signup</li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
