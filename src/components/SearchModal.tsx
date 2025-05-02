import React, { useState } from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';
import Modal from 'react-modal';
import { PokemonCard } from '../components/PokemonCard';
import { useSearchStore } from '../store/useSearchStore';

const SearchModal: React.FC = () => {
    const isOpen = useSearchStore((state) => state.isOpen);
    const closeModal = useSearchStore((state) => state.closeModal);
    const [filter, setFilter] = useState('');
    const [currentSearch, setCurrentSearch] = useState('');
    const { data: pokemonData } = useGetPokemon(currentSearch);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value);

    const onClickSearch = () => {
        const trimmed = filter.trim().toLowerCase();
        if (trimmed) setCurrentSearch(trimmed);
    };


    const handleCloseModal = () => {
        setFilter('');
        setCurrentSearch('');
        closeModal();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={handleCloseModal} className={'w-6/12 h-4/12 bg-white mx-auto p-5 mt-5 flex flex-col gap-5 items-center shadow-lg rounded-lg'}>
            <h6>Search</h6>
            <input type="text" value={filter} onChange={handleInputChange} placeholder="Search..." className='border p-2 rounded-lg w-full' />
            <button onClick={onClickSearch}>Search</button>
            {pokemonData?.id && <PokemonCard pokemonId={pokemonData.id} />}
        </Modal>
    )
}

export default SearchModal;