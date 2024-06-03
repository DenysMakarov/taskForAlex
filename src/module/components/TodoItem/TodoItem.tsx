import React from 'react';
import {Todo} from "../../interfaces";
import Button from "../../shared/Btn/Button";
import './TodoItem.scss';

interface Props {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}
const TodoItem = ({todos, toggleTodo}: Props) => {

    return (
        <ul className={`todolist__right`}>
            {
                todos.length === 0 && <div className={`empty`}>No tasks</div>
            }
            {todos.map((todo) => (
                <li key={todo.id} className={`item item${!todo.completed ? '--active' : '--done'}`}>
                    <div>{todo.title}</div>
                    <Button className={`btn btn${todo.completed ? '--active' : '--done'}`} text={todo.completed ? 'Done' : 'Active'} handleClick={() => toggleTodo(todo.id)}/>
                </li>
            ))}
        </ul>
    );
};



export default TodoItem;
