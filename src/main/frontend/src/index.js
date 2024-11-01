// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Main App component
import { BrowserRouter } from 'react-router-dom'; // Only use BrowserRouter here

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* The App component will handle the routing and Navbar */}
    </BrowserRouter>
  </React.StrictMode>
);
