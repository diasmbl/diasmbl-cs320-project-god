import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import backgroundImage from './background.png'; // Import the image from src

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
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Using imported background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
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
  );
}

export default App;
