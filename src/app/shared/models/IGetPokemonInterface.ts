export interface PokemonInterface {
  map(arg0: (resPokemon: any) => void): unknown;
  name: string;
  url: string;
  status?: any;
}

export interface RequestPokemonInterface {
  count: number,
  next: string | null,
  previous: string | null,
  results: PokemonInterface
}

