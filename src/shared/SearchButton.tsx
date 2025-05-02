import { useSearchStore } from '../store/useSearchStore';

const SearchButton = () => {
    const openModal = useSearchStore((state) => state.openModal);
    return <button onClick={openModal}>Search</button>
}

export default SearchButton;