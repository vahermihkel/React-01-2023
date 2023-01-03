import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Navigeerimiseks on vaja:
// 1. sobilikud failid node_module kausta: npm i react-router-dom
// 2. BrowserRouter panna App ümber index.js failis

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

