import React, { useMemo } from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';
import { useParams } from 'react-router-dom';
import { getMainPokemonType } from '../utils/getMainPokemonType';


const PokemonInfo = () => {
    const { pokemonId } = useParams<{pokemonId: string}>();
    const { data: pokemonData } = useGetPokemon(pokemonId ?? undefined);
    const mainType = useMemo(() => {
        if (!pokemonData) return null;
        return getMainPokemonType(pokemonData);
    }, [pokemonData]);
    

    return (
        <div className='flex flex-row justify-center shadow-lg bg-gray-100 rounded-md p-4 m-4'>
            <div className={`${mainType ?? 'default'}-background w-72 h-72 rounded-l-lg items-center`}>
                <img src={pokemonData?.sprites?.front_default} alt={pokemonData?.name ?? ''} className='w-full h-full' />
            </div>
        </div>
    )
}

export default PokemonInfo;

