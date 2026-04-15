import React from 'react';
import { useGetPokemonList } from '../hooks/useGetPokemonList';
import { PokemonCard } from './PokemonCard';
import { Grid } from '../shared/Grid';

const PokemonList: React.FC = () => {
    const { pokemonList, getNext, getPrevious, isLoading } = useGetPokemonList();

    return (
        <main className="min-h-screen py-8">
            {isLoading ? (
                <div className="flex h-[60vh] items-center justify-center">
                    <div className="relative w-16 h-16 animate-spin">
                        <div className="absolute top-0 w-16 h-8 bg-red-500 rounded-t-full border-4 border-gray-800" />
                        <div className="absolute bottom-0 w-16 h-8 bg-white rounded-b-full border-4 border-gray-800" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-gray-800 rounded-full z-10" />
                    </div>
                </div>
            ) : (
                <div className="animate-fade-in">
                    <Grid getNext={getNext} getPrevious={getPrevious}>
                        {pokemonList.map((pokemon) => (
                            <PokemonCard key={pokemon?.name} pokemon={pokemon} />
                        ))}
                    </Grid>
                </div>
            )}
        </main>
    );
};

export default PokemonList;
