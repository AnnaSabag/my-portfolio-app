import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ Make sure App.js is in the same folder
import './index.css';     // ❌ This file doesn't exist, so remove it or create it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
