import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
            <p className="text-lg">Somos tu destino para disfrutar de las mejores películas desde la comodidad de tu hogar. Descubre una experiencia cinematográfica única con nosotros.</p>
          </div>

          <div>
            <nav className="centered-nav">
              <Link className="nav-link" to="/Peliculas">Cartelera</Link>
              <Link className="nav-link" to="/">Página Principal</Link>
              <Link className="nav-link" to="/Contacto">Contacto</Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg">&copy; 2024 Cinépolis Córdoba (Cine Córdoba). Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
