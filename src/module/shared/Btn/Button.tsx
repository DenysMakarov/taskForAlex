import React from 'react';

interface Props {
    text?: string
    handleClick?: () => void;
    type?: string;
    className?: string;
    isActive?: boolean;
}

const Button = ({text, handleClick, isActive, type, className='btn'}: Props) => {
    return (
        <button className={`${className} ${isActive ? 'active' : ''}`} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;
