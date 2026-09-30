import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav aria-label="Main navigation">
      <h2>
        <NavLink className="nav-logo" to="/">
          <img src="/offleaf.png" alt="" className="nav-logo-image" />
          <span>Jean Chant Tutoring</span>
        </NavLink>
      </h2>

      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
