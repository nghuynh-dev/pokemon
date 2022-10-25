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
