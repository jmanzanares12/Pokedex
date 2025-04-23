import React from 'react';

interface GridProps {
    children: React.ReactNode;
    getNext?: () => void;
    getPrevious?: () => void;
}

export const Grid: React.FC<GridProps> = ({ children, getNext, getPrevious }) => (
    <div className='container mx-auto w-100'>
        <div className='grid grid-cols-4 gap-3 mx-auto'>
            {children}
        </div>
        <div className='flex justify-center mt-4 gap-5'>
            {getPrevious && <button onClick={getPrevious} className='bg-white border border-gray-300 rounded-lg shadow-lg px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Previous</button>}
            {getNext && <button onClick={getNext} className='bg-white border border-gray-300 rounded-lg shadow-lg px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Next</button>}
        </div>
    </div>
)

