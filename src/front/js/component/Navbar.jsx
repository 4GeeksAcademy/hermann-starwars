import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwars-logo.png";
// import "./Navbar.css";  // Importa el archivo CSS personalizado

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={starWarsLogo} alt="Star Wars Logo" width="150" height="75" className="d-inline-block align-text-top" />
        </Link>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <Link className="nav-link" to="/contactlist">CONTACTS</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/systems">CHARACTERS</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/locations">PLANETS</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/cultures">VEHICULES</Link>
              </li>
          </ul>
      </div>
		<Link className="navbar-brand" to="/">
			<button className="btn btn-warning ml-2" type="button">FAVORITES</button>
        </Link>
      </div>
    </nav>
  );
};