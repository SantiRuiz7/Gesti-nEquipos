// SuccessAlert.jsx
import React from 'react';

const SuccessAlert = ({ message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-600 text-white p-4 rounded-md shadow-lg animate-bounce">
        <span>{message}</span>
    
          &times;
      
      </div>
    </div>
  );
};

export default SuccessAlert;