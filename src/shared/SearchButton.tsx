import { useSearchStore } from '../store/useSearchStore';

const SearchButton = () => {
    const openModal = useSearchStore((state) => state.openModal);
    return <button onClick={openModal} className='text-black hover:text-white'>Search</button>
}

export default SearchButton;