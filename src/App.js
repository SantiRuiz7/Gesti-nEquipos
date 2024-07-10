import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Merchandising from './components/Merchandising';
import Visitas from './components/Visitas';
import Navbar from './components/Navbar';
import Planogramas from './components/Planogramas';
import StoreDetails from './components/StoreDetails';
import './App.css';

const App = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const clickDiv = document.createElement('div');
      clickDiv.className = 'click-highlight';
      clickDiv.style.left = `${e.pageX}px`;
      clickDiv.style.top = `${e.pageY}px`;
      document.body.appendChild(clickDiv);
      
      setTimeout(() => {
        clickDiv.remove();
      }, 500); // Elimina el div después de la animación
    };

    document.addEventListener('click', handleClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow px-4 pt-16 lg:pt-20">
          <Routes>
            <Route path="/Planogramas" element={<Planogramas />} />
            <Route  path="/" element={<Merchandising /> } />
            <Route path="/visitas" element={<Visitas />} />
            <Route path="/detalles-tienda/:chain/:storeName" element={<StoreDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;