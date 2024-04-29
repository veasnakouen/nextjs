import React from "react";
import "./nav.css";
import { navs } from "@/data/data";

const Nav = () => {
  return (
    <nav id="nav" className="navbar">
      <ul>
        {navs.map((nav) => (
          <li key={nav.id}>
            <a href={nav.link}>
              {nav.name === "Home" ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </a>
          </li>
        ))} 
      </ul>
    </nav>
  );
};

export default Nav;
