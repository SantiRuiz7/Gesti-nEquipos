import React from 'react';

const Footer = () => {
  return (
    <section className="text-white bg-gradient-to-r from-teal-200 to-teal-500 body-font">
      <div className=" container px-5 py-24 mx-auto ">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-800 mb-20">
          {/* Title if needed */}
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex animate__animated animate__backInRight" >
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0 animate__animated animate__backInRight">
              <svg fill="none" stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-700 text-lg title-font font-medium mb-2">Tareas Diarias</h2>
              <p className="leading-relaxed text-base">
                Planificación y seguridad diaria para garantizar cumplimiento y visibilidad.
                Revisión de góndolas, productos promocionados y nuevos competidores.
                Priorización de productos en promoción y detección de oportunidades adicionales.
                Mantener la limpieza y ordenación.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0 animate__animated animate__backInRight">
              <svg fill="none" stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
       </div>
            <div className="flex-grow pl-6 animate__animated animate__backInRight">
              <h2 className="text-gray-700 text-lg title-font font-medium mb-2 ">Trabajo en Equipo</h2>
              <p className="leading-relaxed text-base">
                Fomenta la colaboración y la comunicación abierta. Toma tus responsabilidades y estarás colaborando con tu equipo. Gracias.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex animate__animated animate__backInLeft">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
              <svg fill="none" stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow pl-6 animate__animated animate__backInLeft">
              <h2 className="text-gray-700 text-lg title-font font-medium mb-2 animate__animated animate__backInLeft ">Faltas y Enfermedad</h2>
              <p className="leading-relaxed text-base">
                Notificar al supervisor lo antes posible. Gracias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
