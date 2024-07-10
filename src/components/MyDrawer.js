// src/components/MyDrawer.js
import React from 'react';

const MyDrawer = ({ isOpen, onClose, content }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-70 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 justify-between items-center border-b">
        <h2 className="text-xl font-bold">Drawer</h2>
        <button
          onClick={() => onClose(null)}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          ✖️
        </button>
      </div>
      <div className="p-4 justify-between items-left">
        {content}
      </div>
    </div>
  );
};

export default MyDrawer;