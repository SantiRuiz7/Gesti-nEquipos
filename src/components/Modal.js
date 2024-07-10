import React, { useState } from 'react';
import yagoImage from '../utils/yagoRuteo.png';
import marceImage from '../utils/marceruteo.png';
import jorgeImage from '../utils/jorgeruteo.png';
import crisImage from '../utils/crisruteo.png';
import lautiImage from '../utils/lautiruteo.png';
import './modal.css';


const Modal = ({ isOpen, onClose, userName }) => {
  const [isImageLarge, setIsImageLarge] = useState(false);

  const handleImageClick = () => {
    setIsImageLarge(!isImageLarge);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = getImage();
    link.download = `${userName}.png`;
    link.click();
  };

  const getImage = () => {
    switch (userName) {
      case 'santi91':
        return yagoImage;
      case 'marce15':
        return marceImage;
      case 'jorge38':
        return jorgeImage;
      case 'cris33':
        return crisImage;
      case 'lauti21':
        return lautiImage;
      default:
        return yagoImage;
    }
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className={`relative bg-white w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg transform transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-2xl w-8 h-8 rounded-full focus:outline-none text-white"
        >
          &times;
        </button>
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-600">Ruteo {userName}</h2>
        </div>
        <div className="p-6">
          <img 
            src={getImage()} 
            alt={userName} 
            className={`w-full h-auto rounded cursor-pointer transition-transform duration-300 ${isImageLarge ? 'scale-150' : 'scale-100'}`} 
            onClick={handleImageClick}
          />
          <p>
            Ruteo no actualizado
          </p>
        </div>
        <div className="flex justify-end items-center px-6 py-3 border-t border-gray-200">
          <button
            onClick={handleDownload}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none"
          >
            Descargar
          </button>
          <button
            onClick={onClose}
            className="bg-red-400 hover:bg-red-200 px-4 py-2 ml-3 rounded text-white focus:outline-none"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
