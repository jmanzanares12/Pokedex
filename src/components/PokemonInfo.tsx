import { useMemo } from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';
import { useParams } from 'react-router-dom';
import { getMainPokemonType } from '../utils/getMainPokemonType';
import { capitalizeFirstLetter } from '../utils/capitalizeFirtsLetter';
import { convertInchesToCm } from '../utils/convertInchesLetter';
import { convertLbsToKg } from '../utils/convertLbsToKg';
import PokemonSprites from './PokemonSprites';
import { TypeIcons } from './TypeIcons';

const PokemonInfo = () => {
    const { pokemonName } = useParams()
    const { data: pokemonData } = useGetPokemon(pokemonName);
    const mainType = useMemo(
        () => pokemonData && getMainPokemonType(pokemonData),
        [pokemonData]
    );

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg rounded-2xl p-6 m-6 bg-white border border-gray-100'>
            <div className={`${mainType ?? 'default'}-background flex justify-center items-center rounded-2xl p-6`}>
                <img
                    src={pokemonData?.sprites?.front_default}
                    alt={pokemonData?.name ?? ''}
                    className='w-60 h-60 object-contain'
                />
            </div>
            <div className='flex flex-col justify-center p-6 gap-4 w-full'>
                <div className='relative flex items-center gap-4'>
                    <h1 className='text-3xl font-bold text-gray-800'>{capitalizeFirstLetter(pokemonData?.name ?? '')}</h1>
                    <TypeIcons types={pokemonData?.types ?? []} />
                </div>
                <span className='text-lg text-gray-700'>{`Weight: ${convertLbsToKg(pokemonData?.weight ?? 0)} kg`}</span>
                <span className='text-lg text-gray-700'>{`Height: ${convertInchesToCm(pokemonData?.height ?? 0)} cm`}</span>
                <PokemonSprites pokemonName={pokemonData?.name ?? ''} />
            </div>
        </div>
    )
}

export default PokemonInfo;

