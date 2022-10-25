import React from "react";
import "./pokemon.css";

interface Props {
  name: string;
  id: number;
  image: string;
}
export const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image } = props;
  return (
    <div>
      <section className="pokemon-list-container">
        <p className="pokemon-name"> {name} </p>
        <img src={image} alt={name} />
      </section>
    </div>
  );
};
