import React, { useMemo } from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';
import { useParams } from 'react-router-dom';
import { getMainPokemonType } from '../utils/getMainPokemonType';
import { capitalizeFirstLetter } from '../utils/capitalizeFirtsLetter';
import { convertInchesToCm } from '../utils/convertInchesLetter';
import { convertLbsToKg } from '../utils/convertLbsToKg';
import PokemonSprites from './PokemonSprites';


const PokemonInfo = () => {
    const {pokemonName} = useParams()
    const {data: pokemonData} = useGetPokemon(pokemonName);
    const mainType = useMemo(
        () => pokemonData && getMainPokemonType(pokemonData),
        [pokemonData]
    )

    return (
        <div className='flex flex-row justify-between shadow-lg bg-gray-100 rounded-md p-4 m-4'>
            <div className={`${mainType ?? 'default'}-background w-72 h-72 rounded-l-lg items-center`} >
                <img 
                    src= {pokemonData?.sprites?.front_default} 
                    alt={pokemonData?.name ?? ''} 
                    className='mx-auto w-full h-full rounded-lg' 
                />
            </div>
            <div className='flex flex-col grow p-5 gap-3'>    
                <h1 className='text-2xl font-bold'>{capitalizeFirstLetter(pokemonData?.name ?? '')}</h1>
                <span>{`Weight: ${convertLbsToKg(pokemonData?.weight ?? 0)} kg`}</span>
                <span>{`Height: ${convertInchesToCm(pokemonData?.height ?? 0)} cm`}</span>
                <PokemonSprites pokemonName={pokemonData?.name ?? ''} />
            </div>
        </div>
    )
}

export default PokemonInfo;

