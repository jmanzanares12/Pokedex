import React, { useMemo } from 'react';
import { useGetPokemon } from '../hooks/useGetPokomon';
import { PokemonListItem } from '../interface/PokemonListitem';
import { getMainPokemonType } from '../utils/getMainPokemonType';
import { capitalizeFirtsLetter } from '../utils/capitalizeFirtsLetter';
import Label from '../shared/Label';

interface Props {
    pokemon?: PokemonListItem;
    pokemonId?: number;
}

const PokemonCard: React.FC<Props> = ({ pokemon, pokemonId }) => {
    const { data: pokemonData } = useGetPokemon(pokemon?.name, pokemonId);
    const mainType = useMemo(() => {
        if (!pokemonData) return null;
        return getMainPokemonType(pokemonData);
    }, [pokemonData]);


    return (
        <div className={`${mainType ?? 'default'}-background w-56 h-56 rounded-2xl shadow-md p-4 transform hover:scale-105 transition duration-300 ease-in-out`}>
            <div className='flex flex-col items-center mx-auto'>
                <Label>{pokemonData?.name ? capitalizeFirtsLetter(pokemonData?.name) : ''}</Label>
                <img src={pokemonData?.sprites?.front_default} alt={pokemonData?.name ?? ''} className='w-40 h-40 mx-auto' />
            </div>
        </div>
    )
}

export default PokemonCard;