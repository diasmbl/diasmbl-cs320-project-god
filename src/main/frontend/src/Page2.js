import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Array of Pokémon regions for the roulette
const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'];

function Page2() {
  // State variable to store the selected region
  const [selectedRegion, setSelectedRegion] = useState('');
  const navigate = useNavigate();

  // Function to randomly select a Pokémon region
  const spinRoulette = () => {
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];
    setSelectedRegion(randomRegion); // Update state with the selected region
  };

  // Function to navigate to Page 3 (Starter Roulette)
  const navigateToPage3 = () => {
    navigate('/page3');
  };

  return (
    <div>
      <h1>Region Roulette</h1>
      <p>Click below to spin for a Pokémon region!</p>
      <button onClick={spinRoulette}>Spin Roulette</button>

      {/* Display selected region once roulette is spun */}
      {selectedRegion && <p>You will be playing in the {selectedRegion} region!</p>}
      
      {/* Button to navigate to Starter Roulette page */}
      <button onClick={navigateToPage3}>Page 3 (Starter Roulette)</button>
    </div>
  );
}

export default Page2;
