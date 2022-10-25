import React from "react";
import { Poke } from "../interface";
import { PokemonList } from "./PokemonList";
import "./pokemon.css";

interface Props {
  pokemons: Poke[];
}

export const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons } = props;
  return (
    <div>
      <section className="collection-container">
        {pokemons.map((poke, index) => {
          return (
            <div key={index}>
              <PokemonList
                key={poke.id}
                name={poke.name}
                id={poke.id}
                image={poke.sprites.front_default}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};
