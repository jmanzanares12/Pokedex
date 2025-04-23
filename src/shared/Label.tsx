import React from 'react';

interface LabelProps {
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
    return <div className='w-24 h-12 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center'>{children}</div>;
}

export default Label;