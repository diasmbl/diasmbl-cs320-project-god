import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle validation (only letters allowed)
  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]*$/; // Regex to allow only letters (uppercase and lowercase)

    if (regex.test(value)) {
      setter(value);
    }
  };

  // Function to submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      setMessage('Please enter both first name and last name.');
    } else {
      setMessage(`Welcome Trainer ${firstName} ${lastName}!`);
    }
  };

  return (
    <div className="App">
      <h1>Trainer Name</h1>  {/* Updated to display "Trainer Name" */}
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

      {/* Display Message */}
      <p>{message}</p>

      {/* Navigation Buttons */}
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
