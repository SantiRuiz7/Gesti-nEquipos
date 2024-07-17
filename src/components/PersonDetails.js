import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
        Fotos 
      </button>
      <h2
        onClick={toggleStores}
        className="bg-green-500 p-8 text-black font-semibold py-2 px-4 rounded-md mb-4 transition transform hover:scale-110"
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

      <WeeklyPhotosModal
        isOpen={showWeeklyPhotosModal}
        onClose={() => setShowWeeklyPhotosModal(false)}
        stores={weeklyPhotoStores}
      />
    </div>
  );
};

export default PersonDetails;