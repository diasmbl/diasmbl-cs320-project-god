import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'];

function Page2() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const navigate = useNavigate();

  const spinRoulette = () => {
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];
    setSelectedRegion(randomRegion);
  };

  const navigateToPage3 = () => {
    navigate('/page3'); // Navigates to Page 3 (Starter Roulette)
  };

  return (
    <div>
      <h1>Region Roulette</h1>
      <p>Click below to spin for a Pokémon region!</p>
      <button onClick={spinRoulette}>Spin Roulette</button>
      {selectedRegion && <p>You will be playing in the {selectedRegion} region!</p>}
      
      <button onClick={navigateToPage3}>Page 3 (Starter Roulette)</button>
    </div>
  );
}

export default Page2;
