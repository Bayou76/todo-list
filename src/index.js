import React from 'react';
import { createRoot } from 'react-dom/client'; // Importation de createRoot
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

const container = document.getElementById('root'); // Sélectionne l'élément root
const root = createRoot(container); // Crée un root avec createRoot

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
