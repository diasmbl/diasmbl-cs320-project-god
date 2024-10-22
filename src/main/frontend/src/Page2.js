import React, { useState } from 'react';
import './Page2.css';  // CSS for styling the page

const regions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"];

const Page2 = () => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const spinRoulette = () => {
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];
    setSelectedRegion(randomRegion);
  };

  return (
    <div className="region-roulette">
      <h2>Spin to Choose Your Region!</h2>
      <button onClick={spinRoulette}>Spin Roulette</button>
      {selectedRegion && <h3>Your Region is: {selectedRegion}</h3>}
      <img src="/path-to-your-region-image.jpg" alt="Region Roulette" /> {/* Add image to enhance design */}
    </div>
  );
};

export default Page2;
