import { useSearchStore } from '../store/useSearchStore';

const SearchButton = () => {
    const openModal = useSearchStore((state) => state.openModal);
    return <button onClick={openModal} className='text-black hover:text-black/90'>Search</button>
}

export default SearchButton;