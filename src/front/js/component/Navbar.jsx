import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import starWarsLogo from "../../img/starwars-logo.png"; 
import FavoritsList from "./favoritosList.jsx";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const {store, actions} = useContext(Context);
  const navigate = useNavigate();

  
  const handleLogIn = () => {
    if(store.isLoged) {
      actions.logout()
      navigate('/')
    } else {
      navigate('/login')
    }
  }
  const handleSignUp = () => {
    navigate('/sign-up')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Menú desplegable a la izquierda */}
        <div className="menu">
          <button className="menu-button"><i className="fa-solid fa-bars"></i></button>
          <ul className="menu-dropdown">
            <li>
              <Link className="nav-link" to="/characters">CHARACTERS</Link>
            </li>
            <li>
              <Link className="nav-link" to="/contactlist">CONTACTS</Link>
            </li>
            <li>
              <Link className="nav-link" to="/starships">STARSHIPS</Link>
            </li>
            <li>
              <Link className="nav-link" to="/planets">PLANETS</Link>
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
        <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-warning me-3" onClick={handleLogIn}>
              {store.isLoged ? 'Log Out' : 'Log In'}
            </button>
          {!store.isLoged && (
            <button type="button" className="btn btn-warning me-3" onClick={handleSignUp}>
              Sign Up
            </button>
          )}
            <FavoritsList />
        </div>
      </div>
    </nav>
  );
};
