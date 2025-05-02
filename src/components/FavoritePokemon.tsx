import { Grid } from "../shared/Grid";
import { useFavoriteStore } from "../store/useFavoriteStore";
import { PokemonCard } from "./PokemonCard";

export const FavoritePokemon = () => {
    const favoriteIds = useFavoriteStore((state) => state.favorites);

    return (
        <Grid>
            {favoriteIds.map((favoriteId) => <PokemonCard key={favoriteId} pokemonId={Number(favoriteId)} />)}
        </Grid>
    )
}
