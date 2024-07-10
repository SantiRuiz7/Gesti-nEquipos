import React from 'react';
import errorImage from './error-image.png';

const Error404 = () => {
  return (
    <div className="error-container text-center">
      <h2 className="text-3xl font-bold mb-4">Error 404</h2>
      <p className="text-xl mb-4">Lo sentimos, hubo un error. Estamos trabajando para solucionarlo.</p>
      <img src={errorImage} alt="Error" className="mx-auto" />
    </div>
  );
};

export default Error404;
