import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const navigateToPage2 = () => {
    navigate('/page2');
  };

  // Function to validate that the input only contains letters
  const validateInput = (value) => /^[A-Za-z]+$/.test(value);

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    if (value === '' || validateInput(value)) {
      setFirstName(value);
      setError('');
    } else {
      setError('Only letters are allowed in First Name');
    }
  };

  const handleLastNameChange = (e) => {
    const { value } = e.target;
    if (value === '' || validateInput(value)) {
      setLastName(value);
      setError('');
    } else {
      setError('Only letters are allowed in Last Name');
    }
  };

  const fetchMessage = async () => {
    try {
      const response = await fetch('/hello/personalized', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first: firstName, 
          last: lastName
        }),
      });

      const text = await response.text();
      setMessage(`Welcome Trainer ${firstName} ${lastName}`);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && !error) {
      fetchMessage();
    } else {
      setError('Please fill out both First Name and Last Name with valid alphabetic characters');
    }
  };

  return (
    <div>
      <h1>Personalized Greeting</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      {/* Button for navigation */}
      <button onClick={navigateToPage2}>Page 2</button>
    </div>
  );
}

export default App;

