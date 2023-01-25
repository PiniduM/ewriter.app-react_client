import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

import classes from "./NavBar.module.css";

const NavBar = () => {

  const styleActive = ({isActive}) => {
    return {
    background: isActive ? "rgb(179, 139, 233)" : "none"
    }
  }

  return (
    <div className={classes.navBar}>
      <Hamburger />
      <ul id="navMenu" className={classes.navList}>
        <NavLink className={classes.navItem} style={styleActive} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className={classes.navItem} style={styleActive} to="/writer">
          <li>essay&nbsp;writer</li>
        </NavLink>
        <NavLink className={classes.navItem} style={styleActive} to="/aboutus">
          <li>About&nbsp;us</li>
        </NavLink>
        <NavLink className={classes.navItem} style={styleActive} to="/contactus">
          <li>Contact&nbsp;us</li>
        </NavLink>
        <NavLink className={classes.navItem} style={styleActive} to="/trunk">
          <li style={{display: "none"}} >Trunk</li>
        </NavLink>
        <NavLink className={classes.navItem} style={styleActive} to="/login">
          <li>Login</li>
        </NavLink>
        <NavLink className={classes.navItem} style={styleActive} to="/register">
          <li>Register</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
