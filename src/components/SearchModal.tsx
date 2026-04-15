import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useGetPokemon } from '../hooks/useGetPokemon';
import { PokemonCard } from '../components/PokemonCard';
import { useSearchStore } from '../store/useSearchStore';

const SearchModal: React.FC = () => {
    const isOpen = useSearchStore((state) => state.isOpen);
    const closeModal = useSearchStore((state) => state.closeModal);
    const [filter, setFilter] = useState('');
    const [currentSearch, setCurrentSearch] = useState('');
    const { data: pokemonData, isLoading } = useGetPokemon(currentSearch);

    useEffect(() => {
        if (isOpen) {
            setFilter('');
            setCurrentSearch('');
        }
    }, [isOpen]);

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
        <Modal 
            isOpen={isOpen} 
            onRequestClose={handleCloseModal} 
            overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-start"
            className="w-[95%] sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 max-h-[85vh] overflow-y-auto 
                       bg-white/90 backdrop-blur-xl border border-white/40 
                       mx-auto mt-20 p-8 flex flex-col gap-6 items-center 
                       shadow-2xl rounded-[2rem] outline-none animate-fade-in"
        >
            <div className="w-full text-center">
                <h2 className='text-2xl font-black text-gray-800 tracking-tight mb-1'>Find your Pokémon</h2>
                <p className="text-sm text-gray-500 font-medium italic">Enter name or Pokédex ID</p>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-3">
                <input 
                    type="text" 
                    value={filter} 
                    onChange={handleInputChange} 
                    onKeyDown={(e) => e.key === 'Enter' && onClickSearch()}
                    placeholder="E.g. Gengar or 94" 
                    className='flex-1 bg-gray-100/50 border border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 p-4 rounded-2xl text-black outline-none transition-all placeholder:text-gray-400 font-medium' 
                />
                <button 
                    onClick={onClickSearch} 
                    className='bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-4 rounded-2xl shadow-lg shadow-red-200 active:scale-95 transition-all'
                >
                    Search
                </button>
            </div>

            <div className="w-full flex justify-center py-4 min-h-[300px]">
                {isLoading ? (
                    <div className="animate-pulse flex flex-col items-center gap-4">
                        <div className="w-32 h-32 bg-gray-200 rounded-full" />
                        <div className="h-4 w-24 bg-gray-200 rounded-md" />
                    </div>
                ) : pokemonData?.id ? (
                    <div className="animate-fade-in">
                        <PokemonCard pokemonId={pokemonData.id} />
                    </div>
                ) : currentSearch && (
                    <div className="text-center text-gray-400 py-10">
                        <p className="text-lg font-bold">No results found</p>
                        <p className="text-sm">Check the spelling and try again.</p>
                    </div>
                )}
            </div>
        </Modal>
    )
}

export default SearchModal;