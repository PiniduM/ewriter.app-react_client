import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

import Cookies from "js-cookie";

import classes from "./MiniNavBar.module.css";

const MiniNavBar = (props) => {
  let loggedIn = props.loggedIn;

  if (Cookies.get("ewriter_login_token")) {
    loggedIn = true;
  }

  const styleActive = ({ isActive }) => {
    return {
      background: isActive ? "rgb(179, 139, 233)" : "none",
    };
  };

  return (
    <div className={classes.navBar}>
      <Hamburger />
      <ul id="navMenu" className={classes.navList}>
        <div></div>
        <NavLink className={classes.navItem} style={styleActive} to="/">
          <li>Home</li>
        </NavLink>
        {loggedIn && (
          <NavLink className={classes.navItem} style={styleActive} to="/trunk">
            <li>Trunk</li>
          </NavLink>
        )}
        {loggedIn && (
          <NavLink className={classes.navItem} style={styleActive} to="/logout">
            <li>Log&nbsp;out</li>
          </NavLink>
        )}
        {!loggedIn && (
          <NavLink className={classes.navItem} style={styleActive} to="/login">
            <li>Login</li>
          </NavLink>
        )}
        {!loggedIn && (
          <NavLink
            className={classes.navItem}
            style={styleActive}
            to="/register"
          >
            <li>Register</li>
          </NavLink>
        )}
        <div></div>
      </ul>
    </div>
  );
};

export default MiniNavBar;
