import React from "react";
import { Poke, Detail, PokemonDetail } from "../interface";
import { PokemonList } from "./PokemonList";
import "./pokemon.css";

interface Props {
  pokemons: PokemonDetail[];
  detail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

export const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, detail, setDetail } = props;
  const selectPoke = (id: number) => {
    if (!detail.isOpened) {
      setDetail({
        id: id,
        isOpened: true,
      });
    }
  };
  return (
    <>
      <section
        className={
          detail.isOpened
            ? "collection-container-active"
            : "collection-container"
        }
      >
        {detail.isOpened ? <div className="overlay"></div> : <div></div>}
        {pokemons.map((poke, index) => {
          return (
            <div key={index} onClick={() => selectPoke(poke.id)}>
              <PokemonList
                key={poke.id}
                name={poke.name}
                id={poke.id}
                abilities={poke.abilities}
                image={poke.sprites.front_default}
                detail={detail}
                setDetail={setDetail}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};
