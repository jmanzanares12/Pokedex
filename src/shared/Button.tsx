import React, { useCallback } from 'react';
import { useFavoriteStore } from '../store/useFavoriteStore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface ButtonProps {
    pokemonId: number;
}

export const FavoriteButton: React.FC<ButtonProps> = ({ pokemonId }) => {
    const id = pokemonId.toString();

    // Usamos useCallback para evitar que se vuelva a crear el selector en cada render
    const isFavorite = useFavoriteStore(
        useCallback((state) => state.favorites.includes(id), [id])
    );

    const addFavorite = useFavoriteStore((state) => state.addFavorite);
    const dropFavorite = useFavoriteStore((state) => state.dropFavorite);

    const handleClick = () => {
        isFavorite ? dropFavorite(id) : addFavorite(id);
    };

    return (
        <button
            className="bg-white p-1 rounded-full absolute top-2 left-2"
            onClick={handleClick}
        >
            {isFavorite ? <FaHeart fill="red" /> : <FaRegHeart fill="red" />}
        </button>
    );
};
