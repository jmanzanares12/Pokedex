import React from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';

interface Props {
    pokemonName?: string;
}

const PokemonSprites: React.FC<Props> = ({ pokemonName }) => {
    const { data: pokemonData } = useGetPokemon(pokemonName);

    return (
        <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex-1 glass-panel bg-white/40 p-3 rounded-2xl border border-white/20 shadow-sm flex flex-col items-center'>
                <h6 className='text-xs uppercase tracking-widest font-bold text-gray-500 mb-2'>Normal</h6>
                <div className='flex justify-center bg-white/30 rounded-xl p-1'>
                    <img
                        src={pokemonData?.sprites?.front_default}
                        alt={pokemonData?.name ?? ''}
                        className='w-20 h-20 drop-shadow-md hover:scale-110 transition-transform'
                    />
                    <img
                        src={pokemonData?.sprites?.back_default}
                        alt={pokemonData?.name ?? ''}
                        className='w-20 h-20 drop-shadow-md hover:scale-110 transition-transform'
                    />
                </div>
            </div>

            <div className='flex-1 glass-panel bg-yellow-50/30 p-3 rounded-2xl border border-yellow-200/20 shadow-sm flex flex-col items-center'>
                <h6 className='text-xs uppercase tracking-widest font-bold text-yellow-700/70 mb-2'>✨ Shiny</h6>
                <div className='flex justify-center bg-white/30 rounded-xl p-1'>
                    <img
                        src={pokemonData?.sprites?.front_shiny}
                        alt={pokemonData?.name ?? ''}
                        className='w-20 h-20 drop-shadow-md hover:scale-110 transition-transform'
                    />
                    <img
                        src={pokemonData?.sprites?.back_shiny}
                        alt={pokemonData?.name ?? ''}
                        className='w-20 h-20 drop-shadow-md hover:scale-110 transition-transform'
                    />
                </div>
            </div>
        </div>
    )
}

export default PokemonSprites;