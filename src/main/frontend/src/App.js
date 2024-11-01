// App.js

import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Page2 from './Page2';
import Page3 from './Page3';
import Navbar from './Navbar';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]*$/;
    if (regex.test(value)) {
      setter(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      setMessage('Please enter both first name and last name.');
    } else {
      setMessage(`Welcome Trainer ${firstName} ${lastName}!`);
    }
  };

  return (
    <div className="App" style={{ minHeight: '100vh', padding: '20px' }}>
      <Navbar />
      {/* Buttons and Form Container */}
      <div className="button-container">
        <Link to="/signup">
          <button className="btn">Signup</button>
        </Link>
        <button className="btn">Login</button>
      </div>

      {/* Main Content */}
      <div className="content-container">
        <h1>Trainer Name</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={handleInputChange(setFirstName)}
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={handleInputChange(setLastName)}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <p>{message}</p>
        <Link to="/page2">
          <button>Region Roulette</button>
        </Link>
        <Link to="/page3">
          <button>Starter Roulette</button>
        </Link>
      </div>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
