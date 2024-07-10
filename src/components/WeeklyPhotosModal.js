// WeeklyPhotosModal.js
import React from 'react';

const WeeklyPhotosModal = ({ isOpen, onClose, stores }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded-lg shadow-lg w-80 animate__animated animate__fadeIn relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
        <h3 className="text-xl font-bold mb-2">Fotos Semanales fija</h3>
        <ul className=" list-inside">
          {stores.map((store, index) => (
            <li key={index} className="mb-2">
              {store}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeeklyPhotosModal;
