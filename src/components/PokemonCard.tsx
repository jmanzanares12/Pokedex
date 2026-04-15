import React, { useMemo } from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';
import { PokemonListItem } from '../interface/PokemonListitem';
import { getMainPokemonType } from '../utils/getMainPokemonType';
import { capitalizeFirstLetter } from '../utils/capitalizeFirtsLetter';
import { FavoriteButton } from '../shared/Button';
import { useNavigate } from 'react-router-dom';
import { TypeIcons } from './TypeIcons';
import { useSearchStore } from '../store/useSearchStore';

interface Props {
    pokemon?: PokemonListItem;
    pokemonId?: number;
}

export const PokemonCard: React.FC<Props> = ({ pokemon, pokemonId }) => {
    const closeModal = useSearchStore((state) => state.closeModal);

    const { data: pokemonData, isLoading } = useGetPokemon(pokemon?.name, pokemonId);

    const mainType = useMemo(() => pokemonData && getMainPokemonType(pokemonData), [pokemonData]);
    const navigate = useNavigate();

    const sprites = pokemonData?.sprites as any;
    const officialArt = sprites?.other?.['official-artwork']?.front_default || sprites?.front_default;

    const handleClick = () => {
        if (pokemonData?.name) {
            navigate(`/pokemon/${pokemonData.name}`);
            closeModal();
        }
    };

    if (isLoading) {
        return (
            <div className="w-full max-w-[240px] aspect-[3/4] rounded-[2.5rem] bg-gray-100 animate-pulse flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div
            onClick={handleClick}
            className={`${mainType ?? 'default'}-background relative w-full max-w-[260px] aspect-[3/4] rounded-[2rem] p-3 cursor-pointer overflow-hidden 
            shadow-xl transition-all duration-500 
            hover:-translate-y-2 group`}
        >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

            <div className="relative flex justify-between items-center z-20">
                <FavoriteButton pokemonId={pokemonData?.id ?? 0} />
                <TypeIcons types={pokemonData?.types ?? []} />
            </div>

            <div className="relative flex flex-col justify-end items-center h-full z-10">

                <img
                    src={officialArt}
                    alt={pokemonData?.name ?? ''}
                    className='w-[70%] max-w-[160px] object-contain 
                       drop-shadow-xl transition-all duration-500 
                       group-hover:scale-110 group-hover:-translate-y-2 z-20'
                />

                <div className="w-full bg-white/80 backdrop-blur-md 
                        rounded-[1.5rem] p-3 mt-[-20px] 
                        border border-white/40 shadow-md text-center">

                    <span className="text-[10px] font-bold text-gray-400 block">
                        #{pokemonData?.id?.toString().padStart(3, '0')}
                    </span>

                    <h3 className="text-gray-800 font-black text-lg">
                        {pokemonData?.name
                            ? capitalizeFirstLetter(pokemonData.name)
                            : '...'}
                    </h3>
                </div>
            </div>
        </div>
    );
};