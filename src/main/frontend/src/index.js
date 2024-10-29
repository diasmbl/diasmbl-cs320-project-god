import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global CSS
import App from './App'; // Home page component
import Page2 from './Page2'; // Region Roulette component
import Page3 from './Page3'; // Starter Roulette component
import Navbar from './Navbar'; // Navbar component for navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // React Router for navigation

// Creating the root for rendering the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the main application with React Router
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar /> {/* Navbar with links to different pages */}
      <Routes>
        <Route path="/" element={<App />} /> {/* Home route */}
        <Route path="/page2" element={<Page2 />} /> {/* Region Roulette route */}
        <Route path="/page3" element={<Page3 />} /> {/* Starter Roulette route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
