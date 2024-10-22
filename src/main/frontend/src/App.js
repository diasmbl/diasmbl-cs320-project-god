import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const navigate = useNavigate();
  const navigateToPage2 = () => {
    navigate('/page2');
  };

  // Updated handleSubmit to display "Welcome Trainer"
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Welcome Trainer ${firstName} ${lastName}!`);
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
      {/* Display the message */}
      <p>{message}</p>
      {/* New button for navigation */}
      <button onClick={navigateToPage2}>Page 2</button>
    </div>
  );
}

export default App;
