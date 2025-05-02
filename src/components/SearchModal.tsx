import React, { useState } from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';
import Modal from 'react-modal';
import { PokemonCard } from '../components/PokemonCard';
import { useSearchStore } from '../store/useSearchStore';
import { useEffect } from 'react';

const SearchModal: React.FC = () => {
    const isOpen = useSearchStore((state) => state.isOpen);
    const closeModal = useSearchStore((state) => state.closeModal);
    const [filter, setFilter] = useState('');
    const [currentSearch, setCurrentSearch] = useState('');
    const { data: pokemonData } = useGetPokemon(currentSearch);

    useEffect(() => {
        if(isOpen) {
            setFilter('');
            setCurrentSearch('');
        }
    }, [isOpen])

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
        <Modal isOpen={isOpen} onRequestClose={handleCloseModal} className={'w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 max-h-[90vh] overflow-y-auto bg-white mx-auto mt-10 p-5 flex flex-col gap-5 items-center shadow-lg rounded-lg'}>
            <h6 className='text-lg font-semibold mb-2 text-cyan-900'>Search your favorite Pokemon</h6>
            <input type="text" value={filter} onChange={handleInputChange} placeholder="Search..." className='border p-2 rounded-lg w-full text-black' />
            <button onClick={onClickSearch} className='bg-cyan-900 text-white p-2 rounded-lg'>Search</button>
            {pokemonData?.id && <PokemonCard pokemonId={pokemonData.id} />}
        </Modal>
    )
}

export default SearchModal;