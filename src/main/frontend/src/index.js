import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page2 from './Page2';
import Page3 from './Page3';  // Import the new Page3
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/region" element={<Page2 />} />
        <Route path="/starter" element={<Page3 />} />  {/* Add route for Page3 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
