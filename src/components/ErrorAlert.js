import React from 'react';

const ErrorAlert = ({ message, type, onClose }) => {
  let bgColor, textColor;
  switch (type) {
    case 'success':
      bgColor = 'bg-green-500';
      textColor = 'text-white';
      break;
    case 'error':
      bgColor = 'bg-red-500';
      textColor = 'text-white';
      break;
    case 'warning':
      bgColor = 'bg-yellow-500';
      textColor = 'text-gray-800';
      break;
    default:
      bgColor = 'bg-gray-500';
      textColor = 'text-white';
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className={`relative p-6 rounded-lg shadow-lg ${bgColor} ${textColor} max-w-sm w-full text-center transform transition-transform duration-500 ease-in-out scale-100`}>
        <p className="mb-4">{message}</p>
        <button 
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-full shadow hover:bg-gray-200 transition-colors duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ErrorAlert;
