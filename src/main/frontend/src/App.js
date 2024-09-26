import React, { useState } from 'react';
import './App.css'; // Importing the CSS file

function App() {
  // State to hold first name, last name, and the message
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  // Function to fetch the personalized message
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    const response = await fetch('/hello/personalized', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ first: firstName, last: lastName })
    });
    const text = await response.text();
    setMessage(text); // Update message with the response
    console.log(text)
  };

  return (
    <div className="container">
      <h1>Personalized Greeting</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder="First Name" 
        />
        <br/>
        <label>Last Name:</label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder="Last Name" 
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p> {/* Display the personalized message */}
    </div>
  );
}

export default App;

