import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";
import { PokemonCollection } from "./components/PokemonCollection";
import { Pokemons, Poke } from "./interface";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Poke[]>([]);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
      );
      console.log(res.data);

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  return (
    <div className="App">
      <div className="container-fluid">
        <header className="pokemon-header">Pokemon</header>
        <PokemonCollection pokemons={pokemons} />
      </div>
    </div>
  );
};

export default App;
