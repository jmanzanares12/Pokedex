import React, { useMemo } from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';
import { PokemonListItem } from '../interface/PokemonListitem';
import { getMainPokemonType } from '../utils/getMainPokemonType';
import { capitalizeFirstLetter } from '../utils/capitalizeFirtsLetter';
import Label from '../shared/Label';
import { FavoriteButton } from '../shared/Button';
import { useNavigate } from 'react-router-dom';

interface Props {
    pokemon?: PokemonListItem;
    pokemonId?: number;
}

export const PokemonCard: React.FC<Props> = ({pokemon, pokemonId}) => {
    const {data: pokemonData} = useGetPokemon(pokemon?.name, pokemonId);
    const mainType = useMemo(() => pokemonData && getMainPokemonType(pokemonData), [pokemonData]);
    const navigate = useNavigate();

    const handleClick = () => navigate(`/pokemon/${pokemonData?.name}`);

    return (
        <div className={`${mainType ?? 'default'}-background relative w-56 h-56 rounded-2xl shadow-md p-4 transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer`}>
            <FavoriteButton pokemonId={pokemonData?.id ?? 0} />
            <div className='flex flex-col items-center mx-auto' onClick={handleClick} >
                <Label>{pokemonData?.name ? capitalizeFirstLetter(pokemonData?.name) : ''}</Label>
                <img 
                    src={pokemonData?.sprites?.front_default} 
                    alt={pokemonData?.name ?? ''} 
                    className='w-40 h-40 mx-auto rounded-lg' 
                />
            </div>
        </div>
    )
}