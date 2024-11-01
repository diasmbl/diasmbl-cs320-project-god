import React, { useState } from 'react';
import './Page3.css'; // Import the CSS file for centering and styling

// List of all starter Pokémon by region, along with their types
const starters = [
  'Bulbasaur (Grass/Poison)',
  'Charmander (Fire)',
  'Squirtle (Water)',
  'Chikorita (Grass)',
  'Cyndaquil (Fire)',
  'Totodile (Water)',
  'Treecko (Grass)',
  'Torchic (Fire)',
  'Mudkip (Water)',
  'Turtwig (Grass)',
  'Chimchar (Fire)',
  'Piplup (Water)',
  'Snivy (Grass)',
  'Tepig (Fire)',
  'Oshawott (Water)',
  'Chespin (Grass)',
  'Fennekin (Fire)',
  'Froakie (Water)',
  'Rowlet (Grass/Flying)',
  'Litten (Fire)',
  'Popplio (Water)',
  'Grookey (Grass)',
  'Scorbunny (Fire)',
  'Sobble (Water)',
  'Sprigatito (Grass)',
  'Fuecoco (Fire)',
  'Quaxly (Water)',
  'Pikachu (Electric)' // Added Pikachu as a bonus starter option
];

function Page3() {
  // State variable to store the randomly selected starter Pokémon
  const [starterPokemon, setStarterPokemon] = useState('');

  // Function to randomly select a starter Pokémon
  const spinStarterRoulette = () => {
    const randomStarter = starters[Math.floor(Math.random() * starters.length)];
    setStarterPokemon(randomStarter); // Update state with selected starter Pokémon
  };

  return (
    <div className="page3-container">
      <h1>Starter Pokémon Roulette</h1>
      <p>Click below to spin for your starter Pokémon!</p>
      <button onClick={spinStarterRoulette}>Spin Roulette</button>

      {/* Display selected starter Pokémon */}
      {starterPokemon && <p>Your starter Pokémon is {starterPokemon}!</p>}
    </div>
  );
}

export default Page3;
