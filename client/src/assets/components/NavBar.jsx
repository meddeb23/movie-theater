import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/appLogo.svg";

export default function NavBar() {
  const [navMode, setNavMode] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setNavMode(true);
      } else {
        setNavMode(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <header className={navMode ? "mode-1" : ""}>
      <NavLink to="/">
        <img src={logo} alt="app logo" />
      </NavLink>
      <ul>
        <li>
          <i className="fa fa-search"></i>
        </li>
      </ul>
    </header>
  );
}
