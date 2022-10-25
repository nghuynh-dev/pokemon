import React, { useEffect, useState } from "react";
import { Detail } from "../interface";
import "./pokemon.css";

interface Props {
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
  // abilities: any;
  name: string;
  id: number;
  image: string;
  detail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}
export const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image, abilities, detail, setDetail } = props;
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setIsSelected(id === detail.id);
  }, [detail]);
  const closeDetail = () => {
    setDetail({
      id: 0,
      isOpened: false,
    });
  };
  return (
    <div>
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetail}>
              X
            </p>
            <div className="detail-info">
              <img src={image} alt="name" className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">Abilities: </p>
              {abilities?.map((abi: any) => {
                return <div>{abi.ability.name}</div>;
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name"> {name} </p>
          <img src={image} alt={name} />
        </section>
      )}
    </div>
  );
};
