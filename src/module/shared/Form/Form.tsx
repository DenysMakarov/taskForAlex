import React, { useState } from 'react';
import '../styles.scss';
import Input from "../Input/Input";

interface Props {
    addTodo: (value: string) => void;
}

const Form = ({ addTodo }: Props) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value.trim()) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} className={`form`}>
            <Input value={value} handleChange={setValue} className={'form__input'}/>
            <button className={`form__btn`} type="submit">Add</button>
        </form>
    );
};

export default Form;
