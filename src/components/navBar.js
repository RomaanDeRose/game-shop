import React, { useState } from "react";
import "./navBar.css";
import CartWidget from "./cartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const toggleMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <header className="header">
      <nav className="navBar">
        <Link to="/">
          <FontAwesomeIcon icon={faGamepad} className="navBar-logo" />
        </Link>
        <ul className="navBar-links">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/category/sports">Deportes</NavLink>
          </li>
          <li>
            <NavLink to="/category/action">Acción</NavLink>
          </li>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          className="navBar-menu"
          onClick={toggleMenu}
        />
        <div className={navMenu ? "navMobile navMobile-active" : "navMobile"}>
          <NavLink to="/" onClick={toggleMenu}>
            Inicio
          </NavLink>
          <NavLink to="/category/sports" onClick={toggleMenu}>
            Deportes
          </NavLink>
          <NavLink to="/category/action" onClick={toggleMenu}>
            Acción
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
