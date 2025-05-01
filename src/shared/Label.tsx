import React from 'react';

interface LabelProps {
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
    return <div className='min-w-[100px] h-9 px-3 rounded-xl bg-white border border-gray-300 shadow flex items-center justify-center'>{children}</div>;
}

export default Label;