import React, { useCallback } from 'react';
import { useFavoriteStore } from '../store/useFavoriteStore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface ButtonProps {
    pokemonId: number;
    onClick?: (e: React.MouseEvent) =>  void;
}

export const FavoriteButton: React.FC<ButtonProps> = ({ pokemonId, onClick }) => {
    const id = pokemonId.toString();

    const isFavorite = useFavoriteStore(
        useCallback((state) => state.favorites.includes(id), [id])
    );

    const addFavorite = useFavoriteStore((state) => state.addFavorite);
    const dropFavorite = useFavoriteStore((state) => state.dropFavorite);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        
        isFavorite ? dropFavorite(id) : addFavorite(id);
        
        if (onClick) onClick(e);
    };

    return (
        <button
            className={`
                absolute top-3 left-3 z-30
                w-9 h-9 flex items-center justify-center
                rounded-full transition-all duration-300
                ${isFavorite 
                    ? 'bg-red-50/90 shadow-md shadow-red-200' 
                    : 'bg-white/40 backdrop-blur-md border border-white/30 shadow-sm'}
                hover:scale-110 active:scale-90 group/heart
            `}
            onClick={handleClick}
        >
            {isFavorite ? (
                <FaHeart className="text-red-500 drop-shadow-sm" size={18} />
            ) : (
                <FaRegHeart className="text-white drop-shadow-md group-hover/heart:text-red-400 transition-colors" size={18} />
            )}
        </button>
    );
};