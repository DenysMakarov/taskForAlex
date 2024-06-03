import React, {useEffect, useState} from 'react';
import {Todo} from "../../interfaces";
import './TodoList.scss';
import Form from "../../shared/Form/Form";
import TodoItem from "../TodoItem/TodoItem";
import {loadTodosFromLocalStorage, saveTodosToLocalStorage} from "../../utils/utils";
import Btn from "../../shared/Btn/Btn";

interface TodoListProps {
    todosFromStorage: Todo[];
}

const TodoList = ({todosFromStorage}: TodoListProps) => {

    const [todos, setTodos] = useState<Todo[]>(todosFromStorage);
    const [filter, setFilter] = useState<string>('All');


    useEffect(() => {
        saveTodosToLocalStorage(todos);
    }, [todos]);


    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        saveTodosToLocalStorage([...todos, newTodo]);
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
                        <Btn text={'All'} handleClick={() => handleFilter('All')}/>
                        <Btn text={'Active'} handleClick={() => handleFilter('Active')}/>
                        <Btn text={'Done'} handleClick={() => handleFilter('Done')}/>
                    </div>

                    <TodoItem todos={filteredTodos} toggleTodo={toggleTodo}/>
                </div>
            </div>
        </>

    );
};

export default TodoList;
