import React from 'react';

interface GridProps {
    children: React.ReactNode;
    getNext?: () => void;
    getPrevious?: () => void;
}

export const Grid: React.FC<GridProps> = ({ children, getNext, getPrevious }) => (
    <div className='max-w-7xl mx-auto px-6 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center'>
            {children}
        </div>
        <div className='flex justify-center mt-12 gap-6'>
            {getPrevious && (
                <button
                    onClick={getPrevious}
                    className='glass-panel bg-white/50 px-8 py-2.5 rounded-2xl text-gray-700 font-semibold 
                               hover:bg-red-500 hover:text-white hover:-translate-x-1 
                               active:scale-95 transition-all duration-300 shadow-sm flex items-center gap-2'
                >
                    Previous
                </button>
            )}
            {getNext && (
                <button
                    onClick={getNext}
                    className='glass-panel bg-white/50 px-8 py-2.5 rounded-2xl text-gray-700 font-semibold 
                               hover:bg-red-500 hover:text-white hover:translate-x-1 
                               active:scale-95 transition-all duration-300 shadow-sm flex items-center gap-2'
                >
                    Next
                </button>
            )}
        </div>
    </div>
)