import React from 'react';

const PersonSelector = ({ persons, onSelectPerson }) => {
  return (
    <div className="my-4">
      <select 
        onChange={e => onSelectPerson(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Selecciona una persona</option>
        {persons.map(person => (
          <option key={person} value={person}>{person}</option>
        ))}
      </select>
    </div>
  );
};

export default PersonSelector;
