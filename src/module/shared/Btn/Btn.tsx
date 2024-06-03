import React from 'react';

interface Props {
    text?: string
    handleClick?: () => void;
    type?: string;
    className?: string;
}

const Btn = ({text, handleClick, type, className='btn'}: Props) => {
    return (
        <button className={className} onClick={handleClick}>{text}</button>
    );
};

export default Btn;
