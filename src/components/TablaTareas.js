import React, { useState, useEffect } from 'react';
import 'animate.css';

const Calendar = ({ selectedPerson }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [showForms, setShowForms] = useState(false);

  const toggleForms = () => {
    setShowForms(!showForms);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheet.best/api/sheets/c734f978-d601-42c7-86b0-25aac705432b');
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`https://sheet.best/api/sheets/c734f978-d601-42c7-86b0-25aac705432b/id/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tarea: '' }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTasks(tasks.map(task => task.id === id ? { ...task, tarea: '' } : task));
      } else {
        console.error('Error updating task:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const filteredTasks = tasks.filter(task => {
    const equipo = task.equipo ? task.equipo.toLowerCase() : '';
    const tarea = task.tarea ? task.tarea.toLowerCase() : '';
    const nombre = task.nombre ? task.nombre.toLowerCase() : '';
    const evento = task.evento ? task.evento.toLowerCase() : '';
    const filterLower = filter.toLowerCase();
  
    // Filtrar por nombre de persona seleccionada
    const personFilter = selectedPerson.toLowerCase(); // Convertir a minúsculas
  
    return (
      (equipo.includes(filterLower) || tarea.includes(filterLower) || nombre.includes(filterLower) || evento.includes(filterLower)) &&
      (selectedPerson === '' || nombre.toLowerCase().includes(personFilter))
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="">Historial</h1>
     
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-sm font-medium text-left text-gray-700 border-r border-gray-400">Equipos</th>
              <th className="py-2 px-4 text-sm font-medium text-left text-gray-700 border-r border-gray-400">Evento</th>
              <th className="py-2 px-4 text-sm font-medium text-left text-gray-700 border-r border-gray-400">Tarea</th>
              <th className="py-2 px-4 text-sm font-medium text-left text-gray-700">Técnico</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map(task => (
              <tr key={task.id} className={task.tarea ? "bg-red-100" : ""}>
                <td className="py-2 px-4 text-sm font-medium text-gray-700 border-r border-gray-400  animate__animated animate__backInUp">{task.equipo}</td>
                <td className="py-2 px-4 text-sm font-medium text-gray-700 border-r border-gray-400  animate__animated animate__backInUp">{task.evento}</td>
                <td className="py-2 px-4 text-sm text-center list-inside animate__animated animate__backInUp ">
                  {task.tarea}
                  {task.tarea && (
                    <button onClick={() => deleteTask(task.id)} className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v7a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-.5-.5v7a.5.5 0 0 0 1 0V6a.5.5 0 0 0-.5-.5zM14 3.5V4h-1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4H2v-.5a.5.5 0 0 1 .5-.5H4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h1.5a.5.5 0 0 1 .5.5zM4.118 4L4 4.059V14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3a.5.5 0 0 1-.5-.5V2h11v.5a.5.5 0 0 1-.5.5h-11z"/>
                      </svg>
                    </button>
                  )}
                </td>
                <td className="py-2 px-4 text-sm font-medium text-gray-700 border-r border-gray-400  animate__animated animate__backInUp">{task.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>

      <div className="flex justify-center">
            <button onClick={toggleForms} className="bg-black text-white font-semibold py-2 px-4 rounded-md mb-4 transition transform hover:scale-90">
              Formularios
            </button>
          </div>
          {showForms && (
          <div className="mt-4">
          <h3 className="text-sm font-bold mb-2"></h3>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSevW-ebJDhcMwo8aQU2Oj59S037AyFYCejr78ANkJ9En02_jQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-transform transform hover:scale-110 hover:text-green-500"
              >
                Bunge
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfKufBnjwZF64wTMuMUYN9yR2tmJArfJTPfaYdbgSGYkENQ6w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-transform transform hover:scale-110 hover:text-green-500"
              >
                Pipas Maxiconsumo
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScHfdnaoN4DrUxBoCmHPpDEH2aOktZ71EDX-oqgjD7R9PErdQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-transform transform hover:scale-110 hover:text-green-500"
              >
                Impulse Mensual Frentes todas las tiendas
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf5DPfrbHGl0r-0133vDfiCMTYrPTvD1T_1ntaLvMdXuLf-kQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-transform transform hover:scale-110 hover:text-green-500"
              >
                Precios Cbse Carre ruta 2 semanal
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScpfsngRMnC7mvGgPM8lwG14RlaVDZSP23h6S_QnBsGAVeEGA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-transform transform hover:scale-110 hover:text-green-500"
              >
                Croopers Makro
              </a>
            </li>
          </ul>
        </div>
        
  
      )}    
    </div>
    </div>
  );
};

export default Calendar;