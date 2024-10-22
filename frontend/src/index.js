import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa el nuevo API de createRoot
//import './index.css';  // Puedes incluir o quitar esta línea si tienes un archivo CSS
import App from './App';

// Usa createRoot en lugar de ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
