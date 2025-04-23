import { create } from 'zustand';

interface FavoriteStore {
    favorites: string[];
    addFavorite: (id: string) => void;
    dropFavorite: (id: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: localStorage.getItem('favorites-pokemons')?.split(',') || [],
    addFavorite: (id: string) => {
        set((state) => {
            const favorites = [...state.favorites, id];
            localStorage.setItem('favorites-pokemons', favorites.join(','));
            return { favorites };
        });
    },

    dropFavorite: (id: string) => {
        set((state) => {
            const favorites = state.favorites.filter((favorite) => favorite !== id);
            localStorage.setItem('favorites-pokemons', favorites.join(','));
            return { favorites };
        });
    }
}))