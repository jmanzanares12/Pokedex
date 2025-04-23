import React from 'react';

interface GridProps {
    children: React.ReactNode;
    getNext?: () => void;
    getPrevious?: () => void;
}

export const Grid: React.FC<GridProps> = ({ children, getNext, getPrevious }) => (
    <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {children}
        </div>
        <div className='flex justify-center mt-8 gap-4'>
            {getPrevious && (
                <button
                    onClick={getPrevious}
                    className='bg-white border border-gray-300 rounded-xl shadow px-6 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
                >
                    Previous
                </button>
            )}
            {getNext && (
                <button
                    onClick={getNext}
                    className='bg-white border border-gray-300 rounded-xl shadow px-6 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
                >
                    Next
                </button>
            )}
        </div>
    </div>
)

