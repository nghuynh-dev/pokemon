export interface Pokemons {
  name: string;
  url: string;
}

export interface Poke {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface Detail {
  id: number;
  isOpened: boolean;
}

export interface PokemonDetail extends Poke {
  abilities?: {
    ability: string;
    name: string;
  }[];
}
