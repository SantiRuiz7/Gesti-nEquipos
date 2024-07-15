import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MyDrawer from './MyDrawer';
import { data } from '../data';

const StoreDetails = () => {
  const { chain, storeName } = useParams();
  const navigate = useNavigate();
  const users = ['Santiago Ruiz', 'Facundo Esteban', 'Matias Bonadio']; // Lista de usuarios
  const [selectedUser, setSelectedUser] = useState(users[0]); // Usuario seleccionado
  const [userEquipmentData, setUserEquipmentData] = useState({});

  useEffect(() => {
    // Encontrar equipo que coincida con chain y storeName
    if (data[selectedUser]) {
      const selectedEquipment = Object.keys(data[selectedUser]).find(
        key => key === chain
      );
      if (selectedEquipment && data[selectedUser][selectedEquipment]) {
        const equipmentData = data[selectedUser][selectedEquipment].find(
          item => item.name === storeName
        );
        setUserEquipmentData(equipmentData ? equipmentData : {});
      } else {
        setUserEquipmentData({});
      }
    }
  }, [selectedUser, chain, storeName]);

  // Estado para controlar la visibilidad del Drawer y su contenido
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);

  const toggleDrawer = (content = null) => {
    setIsDrawerOpen(!isDrawerOpen);
    setDrawerContent(content);
  };

  // Funciones para manejar la visibilidad de los menús desplegables
  const [showGeneralFeatures, setShowGeneralFeatures] = useState(false);
  const [showParts, setShowParts] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showElectricalPlans, setShowElectricalPlans] = useState(false);

  const toggleGeneralFeatures = () => {
    setShowGeneralFeatures(!showGeneralFeatures);
    setShowParts(false);
    setShowService(false);
    setShowHistory(false);
    setShowElectricalPlans(false);
  };

  const toggleParts = () => {
    setShowParts(!showParts);
    setShowGeneralFeatures(false);
    setShowService(false);
    setShowHistory(false);
    setShowElectricalPlans(false);
  };

  const toggleService = () => {
    setShowService(!showService);
    setShowGeneralFeatures(false);
    setShowParts(false);
    setShowHistory(false);
    setShowElectricalPlans(false);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
    setShowGeneralFeatures(false);
    setShowParts(false);
    setShowService(false);
    setShowElectricalPlans(false);
  };

  const toggleElectricalPlans = () => {
    setShowElectricalPlans(!showElectricalPlans);
    setShowGeneralFeatures(false);
    setShowParts(false);
    setShowService(false);
    setShowHistory(false);
  };

  const openPdf = (pdfPath) => {
    if (pdfPath) {
      // Ruta relativa a la carpeta 'public'
      window.open(`${process.env.PUBLIC_URL}/${pdfPath}`, '_blank');
    } else {
      console.error("PDF Path no está definido.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Detalles de los Equipos</h1>
      <p className="text-lg">Potencia: {chain}</p>
      <p className="text-lg">Equipo: {storeName}</p>

      <div className="w-full max-w-md">
        <button
          onClick={toggleService}
          className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Elementos p/ Service
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showService ? 'max-h-50' : 'max-h-0'
          }`}
        >
          <div className="p-4 border border-gray-300 rounded-md mt-2 bg-white">
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.filters}</p>)}
            >
              Filtros
            </button>
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.oil}</p>)}
            >
              Lubricante
            </button>
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.belts}</p>)}
            >
              Correas
            </button>
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.battery}</p>)}
            >
              Batería
            </button>
          </div>
        </div>

        <button
          onClick={toggleGeneralFeatures}
          className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Características Generales
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showGeneralFeatures ? 'max-h-50' : 'max-h-0'
          }`}
        >
          <div className="p-4 border border-gray-300 rounded-md mt-2 bg-white">
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.trailer}</p>)}
            >
              Trailer
            </button>
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.cabin}</p>)}
            >
              Cabinado
            </button>
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.generalMeasures}</p>)}
            >
              Medidas Generales
            </button>
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.sled}</p>)}
            >
              Trineo
            </button>
          </div>
        </div>



        <button
          onClick={toggleParts}
          className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Partes
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showParts ? 'max-h-50' : 'max-h-0'
          }`}
        >
          <div className="p-4 border border-gray-300 rounded-md mt-2 bg-white">
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.Generador}</p>)}
            >
              Generador
            </button>
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.motor}</p>)}
            >
              Motor
            </button>

            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(
               <p><button
               className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
               onClick={() => openPdf(userEquipmentData.pdfPathReg)} // Ruta al PDF en la carpeta 'public'
             >
               Manual
             </button>{userEquipmentData.regulador}</p>
            )}
            >
              Regulador
            </button>

            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.sensors}</p>)}
            >
              Sensores
            </button>
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleDrawer(<p>{userEquipmentData.vigias}</p>)}
            >
              Vigías
            </button>
          </div>
        </div>

        <button
          onClick={toggleHistory}
          className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Historial
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showHistory ? 'max-h-50' : 'max-h-0'
          }`}
        >
          <div className="p-4 border border-gray-300 rounded-md mt-2 bg-white">
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => navigate('/Planogramas')} 
            >
              Abrir Historial
            </button>
          </div>
        </div>

        <button
          onClick={toggleElectricalPlans}
          className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Planos Eléctricos
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showElectricalPlans ? 'max-h-50' : 'max-h-0'
          }`}
        >
          <div className="p-4 border border-gray-300 rounded-md mt-2 bg-white">
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => openPdf(userEquipmentData.pdfPath)} // Ruta al PDF en la carpeta 'public'
            >
              Abrir Planos Eléctricos
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Atrás
      </button>


      <MyDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} content={drawerContent} />
    </div>
  );
};

export default StoreDetails;
