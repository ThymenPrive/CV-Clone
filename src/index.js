import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Voeg deze regels toe om scrollen te voorkomen
window.addEventListener('wheel', function(e) {
  e.preventDefault();
}, { passive: false });

window.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, { passive: false });
