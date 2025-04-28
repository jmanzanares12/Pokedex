import React from 'react';
import { useGetPokemonList } from '../hooks/useGetPokemonList';
import { PokemonCard } from './PokemonCard';
import { Grid } from '../shared/Grid';

const PokemonList: React.FC = () => {
    const { pokemonList, getNext, getPrevious } = useGetPokemonList();

    return (
        <Grid getNext={getNext} getPrevious={getPrevious}>
            {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon?.name} pokemon={pokemon} />
            ))}
        </Grid>
    );
};

export default PokemonList;
