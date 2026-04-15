import React from 'react';

interface LabelProps {
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
    return (
        <div className='min-w-[120px] h-10 px-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/30 shadow-sm flex items-center justify-center text-gray-800 font-mediumtransition-colors'>
            {children}
        </div>
    );
}

export default Label;