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
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 glass-panel rounded-3xl p-8 m-6 shadow-2xl border border-white/20 overflow-hidden'>
            <div className={`${mainType ?? 'default'}-background relative flex justify-center items-center rounded-2xl p-10 min-h-[300px] shadow-inner`}>
                <img
                    src={(pokemonData?.sprites as any)?.other?.['official-artwork']?.front_default || pokemonData?.sprites?.front_default}
                    alt={pokemonData?.name ?? ''}
                    className='w-72 h-72 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10 hover:scale-105 transition-transform duration-500'
                />
                <div className="absolute inset-0 bg-linear-to-tr from-black/10 to-transparent pointer-events-none rounded-2xl" />
            </div>

            <div className='flex flex-col justify-center p-4 gap-6 w-full'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-5xl font-black text-gray-900 tracking-tight'>
                            {capitalizeFirstLetter(pokemonData?.name ?? '')}
                        </h1>
                        <span className='text-2xl font-mono text-gray-400'>#{pokemonData?.id?.toString().padStart(3, '0')}</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                         <TypeIcons types={pokemonData?.types ?? []} />
                    </div>
                </div>

                <hr className="border-gray-100" />

                <div className='grid grid-cols-2 gap-4'>
                    <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Weight</p>
                        <span className='text-xl font-semibold text-gray-700'>{`${convertLbsToKg(pokemonData?.weight ?? 0)} kg`}</span>
                    </div>
                    <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Height</p>
                        <span className='text-xl font-semibold text-gray-700'>{`${convertInchesToCm(pokemonData?.height ?? 0)} cm`}</span>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Evolution & Variations</p>
                    <PokemonSprites pokemonName={pokemonData?.name ?? ''} />
                </div>
            </div>
        </div>
    )
}

export default PokemonInfo;

