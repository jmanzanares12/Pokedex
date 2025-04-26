import React from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';
import { useParams } from 'react-router-dom';

const PokemonInfo = () => {
    const { pokemonId } = useParams();
    const { data: pokemonData } = useGetPokemon(pokemonId);

    return (
        <div>
            <h1>{pokemonData?.name}</h1>
        </div>
    )
}

export default PokemonInfo;

