import React from 'react';
import {Todo} from "../../interfaces";
import Btn from "../../shared/Btn/Btn";
import './TodoItem.scss';

interface Props {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}
const TodoItem = ({todos, toggleTodo}: Props) => {

    return (
        <ul className={`todolist__right`}>
            {todos.map((todo) => (
                <li key={todo.id} className={`item item${!todo.completed ? '__active' : '__done'}`}>
                    <div>{todo.title}</div>
                    <Btn text={todo.completed ? 'Done' : 'Active'} handleClick={() => toggleTodo(todo.id)}/>
                </li>
            ))}
        </ul>
    );
};



export default TodoItem;
