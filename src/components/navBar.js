import React, { useState } from "react";
import "./navBar.css";
import CartWidget from "./cartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGamepad } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [classMenu, setClassMenu] = useState("navMobile");

  const toggleMenu = () => {
    if (navMenu) {
      setClassMenu("navMobile");
      setNavMenu(false);
    } else {
      setClassMenu("navMobile navMobile-active");
      setNavMenu(true);
    }
  };

  return (
    <header className="header">
      <nav className="navBar">
        <a href="#">
          <FontAwesomeIcon icon={faGamepad} className="navBar-logo" />
        </a>
        <ul className="navBar-links">
          <li>
            <a href="##">Todos</a>
          </li>
          <li>
            <a href="##">Escritorio</a>
          </li>
          <li>
            <a href="##">Consola</a>
          </li>
        </ul>
        <CartWidget />
        <FontAwesomeIcon
          icon={faBars}
          className="navBar-menu"
          onClick={toggleMenu}
        />
        <div className={classMenu}>
          <a href="#" className="link">
            INICIO
          </a>
          <a href="#" className="link">
            ESCRITORIO
          </a>
          <a href="#" className="link">
            CONSOLA
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
