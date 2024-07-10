import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de crear y enlazar este archivo CSS

const Navbar = () => {
  const handleRefresh = () => {
    window.location.reload(); // Recargar la página al hacer clic en INICIO
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-green-600 to-gray-800 shadow-md fixed top-0 w-full z-50">
        {/* Brand/Logo */}
        <Link to="/" className="text-xl font-bold" onClick={handleRefresh}>
          <button class="btn shadow-effect">
          <p className="text-sm font-semibold text-gray-100">INICIO</p>

          </button>
        </Link>
        {/* Navigation Links (All Screens) */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200">
            {/* Puedes agregar enlaces adicionales aquí */}
          </Link>
        </div>

  
      </nav>
      <div className="marquee">
        <div className="marquee-content">
          ###Speed### Recordar revisar fotografías antes de enviar, que no se vea polvo ni pack húmedos. Donde se retire Heladeras enviar fotos en depo####Danica####si hay esanita en la góndola avisar antes de subir la fotos al grupo, antentos al ingreso de Aderesos, gracias######Recordar completar fotos semanales. gracias#### 
        </div>
      </div>
    </>
  );
};

export default Navbar;
