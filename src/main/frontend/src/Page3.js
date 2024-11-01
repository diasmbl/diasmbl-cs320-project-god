// Page3.js

import React, { useState, useEffect } from 'react';
import './Page3.css';

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
  'Pikachu (Electric)'
];

function Page3() {
  const [starterPokemon, setStarterPokemon] = useState('');
  const [trainers, setTrainers] = useState([]); // Initialize as an empty array
  const [selectedTrainer, setSelectedTrainer] = useState('');
  const [newTrainerName, setNewTrainerName] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  // Fetch trainers when the component mounts
  useEffect(() => {
    // Fetch trainers from the backend
    fetch('/trainers')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTrainers(data);
        } else {
          console.error('Unexpected response data format:', data);
          setTrainers([]); // Set to an empty array in case of unexpected data
        }
      })
      .catch((error) => {
        console.error('Error fetching trainers:', error);
        setTrainers([]); // Set to an empty array in case of error
      });
  }, []);

  const spinStarterRoulette = () => {
    const randomStarter = starters[Math.floor(Math.random() * starters.length)];
    setStarterPokemon(randomStarter);
  };

  const handleUpdate = () => {
    if (!selectedTrainer || !newTrainerName) {
      setUpdateMessage('Please select a trainer and enter a new name.');
      return;
    }

    // Make a PATCH request to update the trainer name
    fetch(`/trainers/update/${selectedTrainer}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: newTrainerName })
    })
      .then((response) => {
        if (response.ok) {
          setUpdateMessage(`Your new trainer name is ${newTrainerName}!`);
          // Update the trainers list or handle UI changes as needed
          setTrainers((prevTrainers) =>
            prevTrainers.map((trainer) =>
              trainer.id === selectedTrainer ? { ...trainer, name: newTrainerName } : trainer
            )
          );
        } else {
          setUpdateMessage('Failed to update the trainer name. Please try again.');
        }
      })
      .catch((error) => {
        setUpdateMessage('An error occurred. Please try again.');
        console.error('Error updating trainer name:', error);
      });
  };

  return (
    <div className="page3-container">
      <h1>Starter Pokémon Roulette</h1>
      <p>Click below to spin for your starter Pokémon!</p>
      <button onClick={spinStarterRoulette}>Spin Roulette</button>
      {starterPokemon && <p>Your starter Pokémon is {starterPokemon}!</p>}

      <h2>Update Trainer</h2>
      <select value={selectedTrainer} onChange={(e) => setSelectedTrainer(e.target.value)}>
        <option value="">Select a Trainer</option>
        {Array.isArray(trainers) && trainers.map((trainer) => (
          <option key={trainer.id} value={trainer.id}>
            {trainer.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter new name"
        value={newTrainerName}
        onChange={(e) => setNewTrainerName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>

      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
}

export default Page3;
