// Header.jsx
import React from 'react';
import "./header.css"; // Importa el archivo CSS para los estilos

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#" className="nav-link">Inicio</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contáctanos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
