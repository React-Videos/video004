import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* App es un componente y saludo ahora es una propiedad del componente,
    si nos vamos a App,js */}
    {/* <App saludo="Esta es la propiedad saludo del componente App.js"/> */}
    <App>
      {/* Si tengo una etiqueta de apertura y cierre, aqui dentro puedo crear contenido 
      y en APP.js recibo una propiedad especial que se llama children */}
      Esta es una propiedad especial que se llama children
      <h1>Esto es un título</h1>
    </App>
  </React.StrictMode>
);


