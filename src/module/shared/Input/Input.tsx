import React from 'react';

interface InputProps {
    value: string;
    className?: string;
    handleChange: (value: string) => void;
    type?: string;
    placeholder?: string;
}
const Input = ({value, handleChange, className, type, placeholder="Add a new task"}: InputProps) => {
    return (
        <input
            className={className}
            type={type || "text"}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default Input;
