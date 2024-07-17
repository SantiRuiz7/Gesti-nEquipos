import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PersonDetails from './PersonDetails';
import PersonSelector from './PersonSelector';
import { data } from '../data';
import Footer from './Footer';
import { toast, Toaster } from 'sonner';
import 'animate.css';
import Modal from './Modal';
import Calendar from './TablaTareas';

const Merchandising = () => {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTasks, setShowTasks] = useState(false); // Estado para controlar la visibilidad de las tareas

  const handleSubmit = (e) => {
    e.preventDefault();
    let selected = '';
    const lowerCaseName = name.toLowerCase(); // Convertir el nombre a minúsculas

    switch (lowerCaseName) {
      case 'santi91':
        selected = 'Santiago Ruiz';
        break;
      case 'mati93':
        selected = 'Matias Bonadio';
        break;
      case 'facu92':
        selected = 'Facundo Esteban';
        break;
      case 'cris33':
        selected = 'Cristian Villagra';
        break;
      case 'lauti21':
        selected = 'Lautaro Galli';
        break;
      case '0716':
        selected = ''; // No seleccionar ninguna persona
        break;
      default:
        toast.error('Usuario incorrecto');
        return;
    }
    setSelectedPerson(selected);
    setLoggedIn(true);
    toast.success('Inicio de sesión exitoso');
  };

  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-teal-200 to-teal-500 text-gray-800 min-h-screen">
      <Toaster position="top-center" richColors />
      {!loggedIn ? (
        <div className="w-full max-w-xs mt-12 px-4 sm:px-0">
          <form
            onSubmit={handleSubmit}
            className="bg-rose-200 bg-opacity-25 shadow-md rounded px-8 sm:px-14 pt-6 pb-8 animate__animated animate__backInRight"
          >
            <div className="mb-4 text-center">
              <FontAwesomeIcon icon={faUser} className="text-4xl text-gray-500 mb-2" />
              <input
                type="text"
                id="nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingresar usuario"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="rounded-full bg-gray-800 px-16 sm:px-20 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-green-800 active:bg-green-800">
                <span className="relative">
                  <p className="text-s font-semibold text-white animate__animated animate__flash animate__delay-2s animate__repeat-2">
                    Ingresar
                  </p>
                </span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mt-12 text-center px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Gestión Equipos GEA SRL</h2>
          {selectedPerson && <h1 className="text-xl sm:text-2xl font-bold mb-4">{selectedPerson}</h1>}
          
          {/* Contenedor para los botones */}
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={toggleTasks}
              className="text-xs sm:text-sm bg-green-500 text-black font-semibold py-2 px-4 rounded-md transition transform hover:scale-110"
            >
              {showTasks ? 'Cerrar' : ' Tareas'}
            </button>

            {showTasks && (
              <div className="mb-4">
                <Calendar selectedPerson={selectedPerson} />
              </div>
            )}

          </div>

          <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs sm:text-sm bg-green-500 text-black font-semibold py-2 px-4 rounded-md transition transform hover:scale-110 my-8" // Agregando espacio superior e inferior
              >
                Credenciales
          </button>
          {selectedPerson ? (
            <PersonDetails person={selectedPerson} data={data} />
          ) : (
            <PersonSelector persons={Object.keys(data)} onSelectPerson={setSelectedPerson} />
          )}
        </div>
      )}

      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} userName={name} />
    </div>
  );
};

export default Merchandising;

