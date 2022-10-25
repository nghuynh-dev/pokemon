import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";
import { PokemonCollection } from "./components/PokemonCollection";
import { Pokemons, Poke, Detail } from "./interface";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Poke[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [detail, setDetail] = useState<Detail>({
    id: 0,
    isOpened: false,
  });
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
      );
      setNextUrl(res.data.next);

      res.data.results.map(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
        setLoading(false);
      });
    };
    getPokemon();
  }, []);

  const loadMoreBtn = async () => {
    setLoading(true);
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);

    res.data.results.map(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <header className="pokemon-header">Pokemon</header>
        </div>
        <PokemonCollection
          pokemons={pokemons}
          detail={detail}
          setDetail={setDetail}
        />
        {!detail.isOpened && (
          <div className="btn">
            <button onClick={loadMoreBtn}>
              {loading ? "Loading..." : "Load more"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
