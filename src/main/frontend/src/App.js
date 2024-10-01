import React, { useState } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
      setMessage(text);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMessage();
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
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;
