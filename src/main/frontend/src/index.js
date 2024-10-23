import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page2 from './Page2';
import Page3 from './Page3';  // Import Page3 for Starter Roulette
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar /> {/* Navbar with navigation links */}
      <Routes>
        <Route path="/" element={<App />} /> {/* Home page */}
        <Route path="/page2" element={<Page2 />} /> {/* Region Roulette */}
        <Route path="/page3" element={<Page3 />} /> {/* Starter Roulette */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
