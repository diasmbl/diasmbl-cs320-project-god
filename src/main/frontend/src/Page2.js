// Page2.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page2.css';

const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'];

function Page2() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const navigate = useNavigate();

  const spinRoulette = () => {
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];
    setSelectedRegion(randomRegion);
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
    </div>
  );
}

export default Page2;
