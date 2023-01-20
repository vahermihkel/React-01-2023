import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './i18n';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// let muutuja = 34;
// muutuja = 12;

// bootstrap .red-color {color:red, margin: 12px, padding: 30px, border: 1px solid red}
// index.css   .red-color {color: #3231312}
