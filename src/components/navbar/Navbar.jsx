import React from "react";
import "../../App.css";
import {NavLink, Link} from "react-router-dom"
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <Link to="/">
            <h1>
              <span className="highlight">Clarusway </span> Web Design
            </h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
