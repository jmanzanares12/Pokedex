import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonType } from '../interface/PokemonData';
import { mapTypeIcons } from '../utils/mapTypeIcons';

interface Props {
    types: PokemonType[];
}

export const TypeIcons: React.FC<Props> = ({types}) => {
    const navigate = useNavigate();
    const handleClick = (type: PokemonType) => navigate(`/type/${type.type.name}`);
    
    return (
        <div className='absolute top-2 rigth-2 gap-2 cursor-pointer'>
            {types.map((type) => (
                <div 
                    key={type.type.name} 
                    onClick={() => handleClick(type)} 
                    className='flex flex-row items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out'
                >
                    <img src={mapTypeIcons(type)} alt={type.type.name} className='w-full h-full rounded-full' />
                </div>
            ))}
        </div>
    )
}