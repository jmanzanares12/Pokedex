import { Grid } from "../shared/Grid";
import { useFavoriteStore } from "../store/useFavoriteStore";
import { PokemonCard } from "./PokemonCard";
import { useNavigate } from "react-router-dom";

export const FavoritePokemon = () => {
    const favoriteIds = useFavoriteStore((state) => state.favorites);
    const navigate = useNavigate();

    if (favoriteIds.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <div className="bg-gray-100 rounded-full p-8 mb-6 shadow-inner">
                    <svg 
                        className="w-20 h-20 text-gray-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="1.5" 
                            d="class M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2">No favorites yet</h2>
                <p className="text-gray-500 mb-8 max-w-xs">
                    Start exploring the Pokédex and mark your favorite Pokémon to see them here.
                </p>
                <button 
                    onClick={() => navigate('/')}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-2xl shadow-lg shadow-red-200 transition-all active:scale-95"
                >
                    Explore Pokédex
                </button>
            </div>
        );
    }

    return (
        <section className="animate-fade-in">
            <div className="mb-10">
                <h1 className="text-3xl font-black text-gray-800 tracking-tight">Your Favorites</h1>
                <p className="text-gray-500 font-medium italic">Your personalized collection</p>
            </div>
            
            <Grid>
                {favoriteIds.map((favoriteId) => (
                    <PokemonCard 
                        key={favoriteId} 
                        pokemonId={Number(favoriteId)} 
                    />
                ))}
            </Grid>
        </section>
    );
};