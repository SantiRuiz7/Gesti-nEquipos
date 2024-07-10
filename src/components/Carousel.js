
// components/Carousel.js
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.freeimages.com/365/images/previews/406/free-blue-glow-background-vector-28808.jpg',
  'https://media.istockphoto.com/id/1171975180/es/vector/fondo-de-l%C3%ADnea-abstracta-illustrator-vectorial-concepto-futurista-concepto-de-conexi%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=OmFiAwinbRmek9mKl6DJhZfQskA7HVbuIErpPHKizhQ=',
  'https://media.istockphoto.com/id/1419219138/es/vector/l%C3%ADneas-de-onda-abstractas-fondo-din%C3%A1mico-que-fluye.jpg?s=2048x2048&w=is&k=20&c=s7ddfBKPSJrhpmYp4as3QMaGwL92hT-oEeyzKfNpVoo=',
  // Agrega más URLs de imágenes aquí según sea necesario
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center mt-8">
      <img src={images[currentIndex]} alt="landscape" className="w-64 h-40 object-cover rounded-md shadow-md" />
    </div>
  );
};

export default Carousel;
