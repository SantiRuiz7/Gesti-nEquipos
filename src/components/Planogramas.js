import React, { useState } from 'react';
import sun1 from '../utils/sun1.jpg';
import sun2 from '../utils/sun2.jpg';
import sun3 from '../utils/sun3.jpg';
import go1 from '../utils/go1.jpeg';
import go2 from '../utils/go2.jpeg';
import go3 from '../utils/go3.jpeg';
import go4 from '../utils/go4.jpeg';
import go5 from '../utils/go5.jpeg';
import go6 from '../utils/go6.jpeg';
import go7 from '../utils/go7.jpeg';
import go8 from '../utils/go8.jpeg';
import go9 from '../utils/go9.jpeg';
import go10 from '../utils/go10.jpeg';
import go11 from '../utils/go11.jpeg';
import san1 from '../utils/san1.jpeg';
import san2 from '../utils/san1.jpeg';
import san3 from '../utils/san1.jpeg';
import dan1 from '../utils/dan1.jpeg';
import dan2 from '../utils/dan2.jpeg';
import dan3 from '../utils/dan3.jpeg';
import galdePdf from '../utils/galde.pdf';
import speedPdf from '../utils/speed.pdf';
import swiftPdf from '../utils/swift.pdf';
import zucardiPdf from '../utils/zucardi.pdf';
import './Planogramas.css';

const Planogramas = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [expandedImageSrc, setExpandedImageSrc] = useState(null);

  const items = {
    sun: [
      { src: sun1, subtitle: "", title: "", description: "" },
      { src: sun2, subtitle: "", title: "", description: "" },
      { src: sun3, subtitle: "", title: "", description: "" },
    ],
    go: [
      { src: go1, subtitle: "", title: "", description: "" },
      { src: go2, subtitle: "", title: "", description: "" },
      { src: go3, subtitle: "", title: "", description: "" },
      { src: go4, subtitle: "", title: "", description: "" },
      { src: go5, subtitle: "", title: "", description: "" },
      { src: go6, subtitle: "", title: "", description: "" },
      { src: go7, subtitle: "", title: "", description: "" },
      { src: go8, subtitle: "", title: "", description: "" },
      { src: go9, subtitle: "", title: "", description: "" },
      { src: go10, subtitle: "", title: "", description: "" },
      { src: go11, subtitle: "", title: "", description: "" },
    ],
    san: [
      { src: san1, subtitle: "", title: "", description: "" },
      { src: san2, subtitle: "", title: "", description: "" },
      { src: san3, subtitle: "", title: "", description: "" },
    ],
    dan: [
      { src: dan1, subtitle: "", title: "", description: "" },
      { src: dan2, subtitle: "", title: "", description: "" },
      { src: dan3, subtitle: "", title: "", description: "" },
    ],
  };

  const handleImageClick = (src) => {
    setExpandedImageSrc(src);
    setIsImageExpanded(true);
  };

  const handleCloseExpandedImage = () => {
    setIsImageExpanded(false);
    setExpandedImageSrc(null);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900 transition transform hover:text-white hover:scale-110 underline">
            Planogramas
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>

        {/* Render Sun Items */}
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 transition transform hover:text-white hover:scale-110 underline">
            Sunstar
          </h2>
          <div className="flex flex-wrap -m-4">
            {items.sun.map((item, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-full h-auto object-cover object-center cursor-pointer animated-image"
                    src={item.src}
                    onClick={() => handleImageClick(item.src)}
                  />
                  {isImageExpanded && expandedImageSrc === item.src && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                      <img
                        src={expandedImageSrc}
                        alt="Expanded Image"
                        className="max-h-screen max-w-full"
                        onClick={handleCloseExpandedImage}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render Go Items */}
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 transition transform hover:text-white hover:scale-110 underline">
            Godrej
          </h2>
          <div className="flex flex-wrap -m-4">
            {items.go.map((item, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-full h-auto object-cover object-center cursor-pointer animated-image"
                    src={item.src}
                    onClick={() => handleImageClick(item.src)}
                  />
                  {isImageExpanded && expandedImageSrc === item.src && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                      <img
                        src={expandedImageSrc}
                        alt="Expanded Image"
                        className="max-h-screen max-w-full"
                        onClick={handleCloseExpandedImage}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render San Items */}
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 transition transform hover:text-white hover:scale-110 underline">
             Roomers
          </h2>
          <div className="flex flex-wrap -m-4">
            {items.san.map((item, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-full h-auto object-cover object-center cursor-pointer animated-image"
                    src={item.src}
                    onClick={() => handleImageClick(item.src)}
                  />
                  {isImageExpanded && expandedImageSrc === item.src && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                      <img
                        src={expandedImageSrc}
                        alt="Expanded Image"
                        className="max-h-screen max-w-full"
                        onClick={handleCloseExpandedImage}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render Dan Items */}
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 transition transform hover:text-white hover:scale-110 underline">
            Danica
          </h2>
          <div className="flex flex-wrap -m-4">
            {items.dan.map((item, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-full h-auto object-cover object-center cursor-pointer animated-image"
                    src={item.src}
                    onClick={() => handleImageClick(item.src)}
                  />
                  {isImageExpanded && expandedImageSrc === item.src && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                      <img
                        src={expandedImageSrc}
                        alt="Expanded Image"
                        className="max-h-screen max-w-full"
                        onClick={handleCloseExpandedImage}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enlaces a los PDF */}
        <div className="flex flex-col items-center mt-8 space-y-4">
          <a href={galdePdf} target="_blank" className="bg-green-400 text-black font-semibold py-2 px-4 rounded-md transition transform hover:bg-gray-600 hover:text-white hover:scale-105">
            GALDERMA
          </a>
          <a href={speedPdf} target="_blank" className="bg-green-400 text-black font-semibold py-2 px-4 rounded-md transition transform hover:bg-gray-600 hover:text-white hover:scale-105">
            SPEED
          </a>
          <a href={swiftPdf} target="_blank" className="bg-green-400 text-black font-semibold py-2 px-4 rounded-md transition transform hover:bg-gray-600 hover:text-white hover:scale-105">
            SWIFT
          </a>
          <a href={zucardiPdf} target="_blank" className="bg-green-400 text-black font-semibold py-2 px-4 rounded-md transition transform hover:bg-gray-600 hover:text-white hover:scale-105">
            ZUCARDI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Planogramas;
