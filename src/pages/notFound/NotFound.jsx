// components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Página no encontrada</h2>
        <p className="error-description">
          La página que estás buscando podría haber sido eliminada, cambiado de nombre o no está disponible temporalmente.
        </p>
        <Link to="/" className="home-button">
          Volver al inicio
        </Link>
      </div>
      <div className="astronaut">
        <span role="img" aria-label="astronaut">🚀</span>
      </div>
    </div>
  );
};

export default NotFound;