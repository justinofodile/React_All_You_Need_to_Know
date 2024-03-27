import React from "react";
import { NavLink } from "react-router-dom";
import "../navbar/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Our Site</div>
      <div className="navlink">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/postlist">Post</NavLink>
        <NavLink to="/product">Product</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
