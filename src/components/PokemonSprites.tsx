import React from 'react';
import {useGetPokemon} from '../hooks/useGetPokemon';

interface Props {
    pokemonName?: string;
}

const PokemonSprites: React.FC<Props> = ({pokemonName}) => {
    const {data: pokemonData} = useGetPokemon(pokemonName);

    return (
        <div className='flex flex-row '>
            <div>
                <h6 className='text-2xl text-center'>Normal</h6>
                <div className='fflex'>
                    <img src={pokemonData?.sprites?.front_default} alt={pokemonData?.name ?? ''} className='w-32 h-32 mx-auto rounded-lg' />
                    <img src={pokemonData?.sprites?.back_default} alt={pokemonData?.name ?? ''} className='w-32 h-32 mx-auto rounded-lg' />
                </div>
            </div>
            <div>
                <h6 className='text-2xl text-center'>Shiny</h6>
                <div className='fflex'>
                    <img src={pokemonData?.sprites?.front_shiny} alt={pokemonData?.name ?? ''} className='w-32 h-32 mx-auto rounded-lg' />
                    <img src={pokemonData?.sprites?.back_shiny} alt={pokemonData?.name ?? ''} className='w-32 h-32 mx-auto rounded-lg' />
                </div>
            </div>
        </div>
    )
}

export default PokemonSprites;