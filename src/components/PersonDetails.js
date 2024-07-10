import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fichadaImage from '../fichada.png';
import Planogramas from './Planogramas';
import WeeklyPhotosModal from './WeeklyPhotosModal';
import './PersonDetail.css';

const PersonDetails = ({ person, data, user }) => {
  const [showHours, setShowHours] = useState(false);
  const [highlightCompanies] = useState(false);
  const [showPlanogramas, setShowPlanogramas] = useState(false);
  const [showFichadaAlert, setShowFichadaAlert] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [expandedChain, setExpandedChain] = useState(null);
  const [showWeeklyPhotosModal, setShowWeeklyPhotosModal] = useState(false);
  const [showStores, setShowStores] = useState(false);

  const navigate = useNavigate();

 /*const toggleAdmin = () => {
    const inputPassword = prompt('Ingrese la contraseña:');
    if (inputPassword === '0716') {
      setShowHours(!showHours);
    } else {
      alert('Contraseña incorrecta.');
   }
  };*/

  /*const handleCompanyClick = (companyName) => {
    if (companyName.toLowerCase().includes('fichada vital')) {
      setShowFichadaAlert(true);
      const id = setTimeout(() => {
        setShowFichadaAlert(false);
      }, 5000);
      setTimerId(id);
    } else {
      setShowFichadaAlert(false);
    }
  };*/

  const closeFichadaAlert = () => {
    setShowFichadaAlert(false);
    if (timerId) {
      clearTimeout(timerId);
    }
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  const togglePlanogramas = () => {
    setShowPlanogramas(!showPlanogramas);
  };

  const toggleChain = (chain) => {
    setExpandedChain(expandedChain === chain ? null : chain);
  };

  const toggleStores = () => {
    setShowStores(!showStores);
  };

  const weeklyPhotoCompanies = [
    'speed', 'godrej', 'betanin', 'rotoplas', 'swift', 'gum', 'primer premio'
  ];

  const weeklyPhotoStores = [];
  if (data[person]) {
    Object.keys(data[person]).forEach(chain => {
      data[person][chain].forEach(company => {
        if (weeklyPhotoCompanies.includes(company.name.toLowerCase())) {
          weeklyPhotoStores.push(`${chain} - ${company.name}`);
        }
      });
    });
  }

  const handleStoreClick = (chain, company) => {
    navigate(`/detalles-tienda/${chain}/${company.name}`);
  };

  return (
    <div className="person-details flex flex-col items-center">
      <button
        onClick={() => setShowWeeklyPhotosModal(true)}
        className="bg-green-500 p-8 text-black font-semibold py-2 px-4 rounded-md mb-4 transition transform hover:scale-110"
        title="Listado de fotos que son mandatorias cada semana"
      >
        Fotos Semanales
      </button>
      <h2
        onClick={toggleStores}
        className="cursor-pointer text-xl text-black font-bold mb-6 flex items-center font-roboto border-4 border-orange-500 hover:border-blue-500 p-2 transition-colors"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        Equipos
        <span className={`ml-2 transform transition-transform ${showStores ? 'rotate-180' : 'rotate-0'}`}>
          &#x25BC;
        </span>
      </h2>

      {showStores && (
        <>
          {Object.keys(data[person]).map(chain => (
            <div key={chain} className="mb-6">
              <h3
                onClick={() => toggleChain(chain)}
                className="cursor-pointer text-sm font-semibold text-green-500 transition transform hover:text-black hover:scale-110 flex items-center"
              >
                {chain}
                <span className={`ml-2 transform transition-transform ${expandedChain === chain ? 'rotate-180' : 'rotate-0'}`}>
                  &#x25BC;
                </span>
              </h3>
              {expandedChain === chain && (
                <div className="animate__animated animate__backInUp">
                  {data[person][chain].map((company, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-2 rounded-md shadow-sm my-2 transition transform hover:bg-gray-300 ${
                        highlightCompanies && 
                        ['speed', 'godrej', 'betanin', 'rotoplas', 'swift', 'gum', 'primer premio'].includes(company.name.toLowerCase())
                          ? 'bg-red-500 text-black'
                          : 'bg-gray-200'
                      }`}
                      onClick={() => handleStoreClick(chain, company)}
                    >
                      <span className="font-medium">{company.name}</span> - 
                      {showHours && (
                        <span className="text-gray-600">{company.hours} horas</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      )}

      {showFichadaAlert && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
          <div className="modal-content bg-white p-4 rounded-lg relative animate__animated animate__fadeIn" style={{ maxWidth: '90vw' }}>
            <button onClick={closeFichadaAlert} className="absolute top-0 right-0 m-2 text-xl">&times;</button>
            <div className="relative">
              <img src={fichadaImage} alt="Fichada" className="w-full h-auto rounded shadow-md" />
              <button onClick={closeFichadaAlert} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">&times;</button>
            </div>
          </div>
        </div>
      )}

      <button onClick={togglePlanogramas} className="bg-black text-white font-semibold py-2 px-4 rounded-md mb-4 transition transform hover:scale-110">
        Planogramas
      </button>
      
      {showPlanogramas && (
        <>
          <button onClick={togglePlanogramas} className="bg-red-400 text-white font-semibold py-2 px-4 rounded-md mb-4 transition transform hover:scale-110">
            Cerrar
          </button>
          <Planogramas />
        </>
      )}

      <WeeklyPhotosModal
        isOpen={showWeeklyPhotosModal}
        onClose={() => setShowWeeklyPhotosModal(false)}
        stores={weeklyPhotoStores}
      />
    </div>
  );
};

export default PersonDetails;