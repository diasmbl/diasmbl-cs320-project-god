import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page2 from './Page2';
import Navbar from './Navbar';  // Importing the Navbar component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />  {/* Adding the Navbar component above the Routes */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page2" element={<Page2 />} />
        {/* You can add more pages by adding more Route elements here! */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
