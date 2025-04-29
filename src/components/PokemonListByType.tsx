import { useParams } from 'react-router-dom';
import { useGetPokemonListByType } from '../hooks/useGetPokemonListByType';
import { Grid } from '../shared/Grid';
import { PokemonCard } from './PokemonCard';

const PokemonListByType = () => {
    const { typeName } = useParams();
    const { pokemonList } = useGetPokemonListByType(typeName ?? '');

    return (
        <Grid>
            {pokemonList?.map((pokemon) => (
                <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon} />
            ))}
        </Grid>
    );
};

export default PokemonListByType;