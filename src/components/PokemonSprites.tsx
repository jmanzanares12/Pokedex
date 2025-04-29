import React from 'react';
import {useGetPokemon} from '../hooks/useGetPokemon';

interface Props {
    pokemonName?: string;
}

const PokemonSprites: React.FC<Props> = ({pokemonName}) => {
    const {data: pokemonData} = useGetPokemon(pokemonName);

    return (
        <div className='flex flex-col sm:flex-row gap-6 '>
            <div className='flex flex-col items-center'>
                <h6 className='text-lg font-semibold mb-2'>Normal</h6>
                <div className='flex gap-4'>
                    <img 
                        src={pokemonData?.sprites?.front_default} 
                        alt={pokemonData?.name ?? ''} 
                        className='w-24 h-24' 
                    />
                    <img
                        src={pokemonData?.sprites?.back_default} 
                        alt={pokemonData?.name ?? ''} 
                        className='w-24 h-24' />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h6 className='text-lg font-semibold mb-2'>Shiny</h6>
                <div className='flex gap-4'>
                    <img 
                        src={pokemonData?.sprites?.front_shiny} 
                        alt={pokemonData?.name ?? ''} 
                        className='w-24 h-24' 
                    />
                    <img 
                        src={pokemonData?.sprites?.back_shiny} 
                        alt={pokemonData?.name ?? ''} 
                        className='w-24 h-24' />
                </div>
            </div>
        </div>
    )
}

export default PokemonSprites;