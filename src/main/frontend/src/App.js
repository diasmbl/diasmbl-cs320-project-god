import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  // State variables for first name, last name, and message display
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  // Input handler function to ensure only letters are accepted
  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]*$/; // Regex to allow only letters (uppercase and lowercase)

    if (regex.test(value)) {
      setter(value); // Update state if the input value is valid
    }
  };

  // Form submission handler to display a welcome message
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both first name and last name are provided
    if (!firstName || !lastName) {
      setMessage('Please enter both first name and last name.');
    } else {
      setMessage(`Welcome Trainer ${firstName} ${lastName}!`); // Display personalized welcome message
    }
  };

  return (
    <div className="App">
      <h1>Trainer Name</h1> {/* Updated heading to display "Trainer Name" */}
      
      {/* Form for user to input first and last name */}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleInputChange(setFirstName)} // Validates input
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleInputChange(setLastName)} // Validates input
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Display the personalized message */}
      <p>{message}</p>

      {/* Navigation buttons for Region and Starter Roulette pages */}
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
