import React, {useEffect, useState} from 'react';
import {Todo} from "../../interfaces";
import './TodoList.scss';
import Form from "../../shared/Form/Form";
import TodoItem from "../TodoItem/TodoItem";
import {saveTodosToLocalStorage} from "../../utils/utils";
import Button from "../../shared/Btn/Button";

interface TodoListProps {
    todosFromStorage: Todo[];
}

const TodoList = ({todosFromStorage}: TodoListProps) => {

    const [todos, setTodos] = useState<Todo[]>(todosFromStorage);
    const [filter, setFilter] = useState<string>('All');


    useEffect(() => {
        saveTodosToLocalStorage<Todo>('todos', todos);
    }, [todos]);


    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        }));
    }

    const filterTodos = (todos: Todo[], filter: string): Todo[] => {
        switch (filter) {
            case 'Active':
                return todos.filter(todo => !todo.completed);
            case 'Done':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    };
    const handleFilter = (filter: string) => {
        setFilter(filter);
    };

    const filteredTodos = filterTodos(todos, filter);

    return (
        <>
            <h1>TODO List </h1>
            <div className={`todolist todolist__wrapper`}>

                <Form addTodo={addTodo}/>


                <div className={`todolist__block`}>
                    <div className={`todolist__left`}>
                        <Button className={`btn filter-btn`} text={'All'} handleClick={() => handleFilter('All')} isActive={filter === 'All'} />
                        <Button className={`btn filter-btn`} text={'Active'} handleClick={() => handleFilter('Active')} isActive={filter === 'Active'} />
                        <Button className={`btn filter-btn`} text={'Done'} handleClick={() => handleFilter('Done')} isActive={filter === 'Done'} />
                    </div>

                    <TodoItem todos={filteredTodos} toggleTodo={toggleTodo}/>
                </div>
            </div>
        </>

    );
};

export default TodoList;
