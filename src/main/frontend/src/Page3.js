import React, { useState } from 'react';

// Updated list with all starter Pokémon and their types
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
  'Pikachu (Electric)' // Added Pikachu as a bonus option
];

function Page3() {
  const [starterPokemon, setStarterPokemon] = useState('');

  const spinStarterRoulette = () => {
    const randomStarter = starters[Math.floor(Math.random() * starters.length)];
    setStarterPokemon(randomStarter);
  };

  return (
    <div>
      <h1>Starter Pokémon Roulette</h1>
      <p>Click below to spin for your starter Pokémon!</p>
      <button onClick={spinStarterRoulette}>Spin Roulette</button>
      {starterPokemon && <p>Your starter Pokémon is {starterPokemon}!</p>}
    </div>
  );
}

export default Page3;
