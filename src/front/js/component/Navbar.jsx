import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwars-logo.png"; 

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Menú desplegable a la izquierda */}
        <div className="menu">
          <button className="menu-button">☰</button>
          <ul className="menu-dropdown">
            <li>
              <Link className="nav-link" to="/contactlist">CONTACTS</Link>
            </li>
            <li>
              <Link className="nav-link" to="/systems">CHARACTERS</Link>
            </li>
            <li>
              <Link className="nav-link" to="/locations">PLANETS</Link>
            </li>
            <li>
              <Link className="nav-link" to="/cultures">VEHICLES</Link>
            </li>
          </ul>
        </div>

        {/* Logo centrado */}
        <div className="logo-container">
          <Link className="navbar-brand" to="/">
            <img src={starWarsLogo} alt="Star Wars Logo" width="125" height="63" />
          </Link>
        </div>

        {/* Botón "Favorites" a la derecha */}
        <div className="favorites-container">
          <Link to="/favorites">
            <button className="btn btn-warning">FAVORITES</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
