// Page2.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page2.css';

const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'];

function Page2() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [trainers, setTrainers] = useState([]);
  const navigate = useNavigate();

  // Fetch trainers from backend
  useEffect(() => {
    fetch('/api/trainers') // Adjust the endpoint as necessary
      .then((response) => response.json())
      .then((data) => setTrainers(data))
      .catch((error) => console.error('Error fetching trainers:', error));
  }, []);

  const spinRoulette = () => {
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];
    setSelectedRegion(randomRegion);
  };

  const deleteTrainer = (id) => {
    fetch(`/api/trainers/${id}`, { method: 'DELETE' })
      .then(() => setTrainers(trainers.filter((trainer) => trainer.id !== id)))
      .catch((error) => console.error('Error deleting trainer:', error));
  };

  const navigateToPage3 = () => {
    navigate('/page3');
  };

  return (
    <div className="page2-container">
      <h1>Region Roulette</h1>
      <p>Click below to spin for a Pokémon region!</p>
      <button onClick={spinRoulette}>Spin Roulette</button>
      {selectedRegion && <p>You will be playing in the {selectedRegion} region!</p>}
      <button onClick={navigateToPage3}>Go to Starter Roulette</button>

      <h2>Trainer Party</h2>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.id}>
            {trainer.name} - {trainer.region}
            <button onClick={() => deleteTrainer(trainer.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page2;
