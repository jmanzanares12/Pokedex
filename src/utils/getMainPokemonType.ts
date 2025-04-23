import { PokemonData } from "../interface/PokemonData";

export const getMainPokemonType = (pokemonData: PokemonData) => {
    const types = pokemonData.types;
    const mainType = types.find(type => type.slot === 1);
    return mainType?.type.name ?? null;
}
