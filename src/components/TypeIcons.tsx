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
        <div className='absolute top-2 right-2 gap-2 cursor-pointer'>
            {types.map((type) => (
                <div 
                    key={type.type.name} 
                    onClick={() => handleClick(type)} 
                    className='flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-gray-100 shadow-md cursor-pointer transition-all'
                >
                    <img 
                        src={mapTypeIcons(type)} 
                        alt={type.type.name} 
                        className='w-6 h-6 rounded-full' 
                    />
                </div>
            ))}
        </div>
    )
}