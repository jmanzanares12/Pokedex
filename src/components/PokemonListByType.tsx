import React from 'react';
import { useGetPokemonList } from '../hooks/useGetPokemonList';
import { PokemonCard } from './PokemonCard';
import { Grid } from '../shared/Grid';

const PokemonList: React.FC = () => {
    const { pokemonList, getNext, getPrevious, isLoading } = useGetPokemonList();

    const isInitialLoading = isLoading && pokemonList.length === 0;

    if (isInitialLoading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <div className="relative w-16 h-16 animate-spin">
                    <div className="absolute top-0 w-16 h-8 bg-red-500 rounded-t-full border-4 border-gray-800" />
                    <div className="absolute bottom-0 w-16 h-8 bg-white rounded-b-full border-4 border-gray-800" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-gray-800 rounded-full z-10" />
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50/30 py-8">
            <div className="animate-fade-in">
                <Grid getNext={getNext} getPrevious={getPrevious}>
                    {pokemonList.map((pokemon) => (
                        <PokemonCard key={pokemon?.name} pokemon={pokemon} />
                    ))}
                </Grid>

                {isLoading && (
                    <div className="flex justify-center mt-6">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin" />
                    </div>
                )}
            </div>
        </main>
    );
};

export default PokemonList;