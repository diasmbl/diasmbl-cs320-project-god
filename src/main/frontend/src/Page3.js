import React, { useState } from 'react';
import './Page3.css';  // CSS for styling the page

const starters = ["Bulbasaur", "Charmander", "Squirtle", "Chikorita", "Cyndaquil", "Totodile", "Treecko", "Torchic", "Mudkip"];

const Page3 = () => {
  const [selectedStarter, setSelectedStarter] = useState('');

  const spinStarterRoulette = () => {
    const randomStarter = starters[Math.floor(Math.random() * starters.length)];
    setSelectedStarter(randomStarter);
  };

  return (
    <div className="starter-roulette">
      <h2>Spin to Choose Your Starter Pokémon!</h2>
      <button onClick={spinStarterRoulette}>Spin Starter Roulette</button>
      {selectedStarter && <h3>Your Starter is: {selectedStarter}</h3>}
      <img src="/path-to-your-starter-image.jpg" alt="Starter Roulette" /> {/* Add image */}
    </div>
  );
};

export default Page3;
