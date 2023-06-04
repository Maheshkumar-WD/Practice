import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  let navLinkActive = ({ isActive }) => {
    return isActive ? classes.active : undefined;
  };
  return (
    <header>
      <nav className={classes.mainNav}>
        <h1 className={classes.logo}>Blog App</h1>
        <ul>
          <li>
            <NavLink className={navLinkActive} to={"/blogs"}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkActive} to={"/new-Blog"}>
              Add Blog
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkActive} to={"/my-blogs"}>
              My Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkActive} to={"/login"}>
              login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
