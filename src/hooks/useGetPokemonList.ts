import { useQuery } from '@tanstack/react-query';
import {useState} from 'react';
import { BASE_URL } from '../constants/url';
import { PokemonListItem } from '../interface/PokemonListitem';

interface Props {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

export const useGetPokemonList = () => {
    const [url, setUrl] = useState(`${BASE_URL}pokemon?limit=36`);

    const { data, isLoading, error } = useQuery<Props>({
        queryKey: ['pokemonList', url],
        queryFn: async () => {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error('Failed to fetch pokemon list');
            }
            return response.json();
        }
    })

    const getNext = () => {
        if(data?.next) {
            setUrl(data.next);
        }
    }

    const getPrevious = () => {
        if(data?.previous) {
            setUrl(data.previous);
        }
    }

    return {
        pokemonList: data?.results ?? [],
        isLoading,
        error: error?.message ?? null,
        getNext: data?.next ? getNext : undefined,
        getPrevious: data?.previous ? getPrevious : undefined,
    }
}