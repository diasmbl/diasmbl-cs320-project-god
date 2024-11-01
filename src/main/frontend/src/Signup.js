// Signup.js

import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = { name: username, password };

    try {
      const response = await fetch('/submit-name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.text();
      setMessage(result);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Signup;
