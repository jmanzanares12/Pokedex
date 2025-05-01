import React, { useMemo } from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';
import { PokemonListItem } from '../interface/PokemonListitem';
import { getMainPokemonType } from '../utils/getMainPokemonType';
import { capitalizeFirstLetter } from '../utils/capitalizeFirtsLetter';
import Label from '../shared/Label';
import { FavoriteButton } from '../shared/Button';
import { useNavigate } from 'react-router-dom';
import { TypeIcons } from './TypeIcons';

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
        <div 
            className={`
                ${mainType ?? 'default'}-background 
                relative w-full max-w-[240px] aspect-[3/4] rounded-2xl shadow-lg
                shadow-md hover:shadow-xl p-6 cursor-pointer
                `}
            >
            <FavoriteButton pokemonId={pokemonData?.id ?? 0} />
            <TypeIcons types={pokemonData?.types ?? []} />
            <div className='flex flex-col items-center justify-center h-full gap-3' onClick={handleClick} >
                <Label>
                    <span className='text-lg font-semibold text-gray-800'>
                        {pokemonData?.name ? capitalizeFirstLetter(pokemonData?.name) : ''}
                    </span>
                </Label>
                <img 
                    src={pokemonData?.sprites?.front_default} 
                    alt={pokemonData?.name ?? ''} 
                    className='w-32 h-32 mx-auto rounded-xl' 
                />
            </div>
        </div>
    )
}