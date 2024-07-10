<<<<<<< HEAD
# Proyecto React con Tailwind CSS

Este proyecto es una aplicación React que utiliza Tailwind CSS para el diseño y estilo de la interfaz de usuario. Incluye componentes como un carrusel, vistas de merchandising y visitas, y navegación entre diferentes rutas.

## Requisitos

Asegúrate de tener instalados los siguientes requisitos antes de comenzar:

- Node.js (versión 12 o superior)
- npm (versión 6 o superior) o yarn

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
Instalar las dependencias

Usando npm:

bash
Copiar código
npm install
Usando yarn:

bash
Copiar código
yarn install
Configuración de Tailwind CSS
Este proyecto utiliza Tailwind CSS para el diseño. Asegúrate de que Tailwind CSS esté configurado correctamente en el proyecto.

Instalar Tailwind CSS y sus dependencias

Usando npm:

bash
Copiar código
npm install tailwindcss postcss autoprefixer
Usando yarn:

bash
Copiar código
yarn add tailwindcss postcss autoprefixer
Crear los archivos de configuración

bash
Copiar código
npx tailwindcss init -p
Esto creará un archivo tailwind.config.js y un archivo postcss.config.js en la raíz del proyecto.

Configurar Tailwind CSS

En el archivo tailwind.config.js, asegúrate de tener la siguiente configuración mínima:

javascript
Copiar código
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Incluir Tailwind CSS en tu CSS principal

Abre tu archivo src/index.css y asegúrate de incluir las siguientes líneas:

css
Copiar código
@tailwind base;
@tailwind components;
@tailwind utilities;
Configuración de la Librería de Iconos
Este proyecto utiliza react-icons para los iconos.

Instalar react-icons

Usando npm:

bash
Copiar código
npm install react-icons
Usando yarn:

bash
Copiar código
yarn add react-icons
Función de Exportar a PDF
Este proyecto utiliza html2pdf.js para la funcionalidad de exportar a PDF.

Instalar html2pdf.js

Usando npm:

bash
Copiar código
npm install html2pdf.js
Usando yarn:

bash
Copiar código
yarn add html2pdf.js
Ejemplo de uso de html2pdf.js

En tu componente donde quieras implementar la funcionalidad de exportar a PDF:

javascript
Copiar código
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const MyComponent = () => {
  const componentRef = useRef();

  const handlePrint = () => {
    const element = componentRef.current;
    html2pdf()
      .from(element)
      .save();
  };

  return (
    <div>
      <div ref={componentRef}>
        {/* Tu contenido a imprimir */}
      </div>
      <button onClick={handlePrint}>Exportar a PDF</button>
    </div>
  );
};

export default MyComponent;
Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

npm start o yarn start
Inicia la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verlo en tu navegador.

La página se recargará cuando hagas cambios.
También verás cualquier error de lint en la consola.

npm run build o yarn build
Construye la aplicación para producción en la carpeta build.
Empaqueta correctamente React en modo de producción y optimiza la construcción para obtener el mejor rendimiento.

La construcción está minificada y los nombres de los archivos incluyen los hashes.
¡Tu aplicación está lista para desplegarse!

Estructura del Proyecto
El proyecto tiene la siguiente estructura de directorios:

arduino
Copiar código
.
├── public
├── src
│   ├── components
│   │   ├── Merchandising.js
│   │   ├── Visitas.js
│   │   └── Carousel.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
Componentes Principales
App.js: El componente principal que define las rutas y la estructura general de la aplicación.
Merchandising.js: Componente para la vista de merchandising.
Visitas.js: Componente para la vista de visitas.
Carousel.js: Componente para el carrusel.
Configuración de Rutas
La aplicación utiliza react-router-dom para la navegación entre diferentes vistas. Las rutas están definidas en App.js:

javascript
Copiar código
<Routes>
  <Route path="/" element={<Merchandising />} />
  <Route path="/visitas" element={<Visitas />} />
</Routes>
Licencia
Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.

css
Copiar código

Este README proporciona una guía completa para instalar, configurar y ejecutar el proyecto, inclu
 // PDFs de ejemplo por usuario

  /*
      <div className="flex justify-center mb-4">
        <select
          onChange={(e) => {
            setSelectedUser(e.target.value);
            setShowPdfList(true);
          }
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md"
        >
          <option value="">Seleccionar Usuario</option>
          <option value="laut">Lautaro</option>
          <option value="marce">Marcelo</option>
          <option value="cri3">Cristian</option>
          <option value="jorg8">Jorge</option>
        </select>
      </div>
      */
=======
# Gesti-nEquipos
Aplicacion para gestionar equipos, maquinaria, respuestos, insumos, etc
>>>>>>> d7154c331671778ec768480127ff4bdad728737f
