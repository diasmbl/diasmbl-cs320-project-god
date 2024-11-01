// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global CSS
import App from './App'; // Home page component
import { BrowserRouter } from 'react-router-dom'; // React Router for navigation

// Creating the root for rendering the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the main application with React Router
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Render the main App component, which includes the Navbar */}
    </BrowserRouter>
  </React.StrictMode>
);

