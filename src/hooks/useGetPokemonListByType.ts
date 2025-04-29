import { BASE_URL } from '../constants/url';
import { useQuery } from '@tanstack/react-query';
import { PokemonListItem } from '../interface/PokemonListitem';

interface PokememonProps {
    pokemon: PokemonListItem;
}

interface TypeListProps {
    pokemon: PokememonProps[];
}

export const useGetPokemonListByType = (typeName: string) => {
    const {data, isLoading, error} = useQuery<TypeListProps>({
        queryKey: ['pokemonListByType', typeName],
        queryFn: async () => {
            const response = await fetch(`${BASE_URL}type/${typeName}`);
            if(!response.ok) {
                throw new Error('Failed to fetch pokemon list');
            }
            return response.json();
        }
    });

    return {
        pokemonList: data?.pokemon ?? [],
        isLoading,
        error: error?.message ?? null,
    }
}

