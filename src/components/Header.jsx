  import React from 'react';
  import { Routes, Route, Link } from 'react-router-dom';
  import '../styles/Header.css';

  const Header = () => {
    return (
        <header className="cinema-header">
          <div className="logo-container">
            <img
              src="/src/logo.png"
              alt="Logo de mi cine"
              className="logo"
            />
            <h1>Cinépolis Córdoba </h1>
          </div>
          <hr />
          <div>
            <nav className="nav-links">
              <Link to="/" className='a1'>Inicio</Link>
              <Link to="/Peliculas" className='a1'>Películas</Link>
              <Link to="/Favoritos" className='a1'>Favoritas</Link>
            </nav>
          </div>
        </header>
    );
  };

  export default Header;
