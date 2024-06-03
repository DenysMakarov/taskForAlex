import React from 'react';import './App.scss';
import TodoList from "./module/components/TodoList/TodoList";
import {loadTodosFromLocalStorage} from "./module/utils/utils";
import {Todo} from "./module/interfaces";

function App() {
    const todosFromStorage = loadTodosFromLocalStorage<Todo>('todos') || [];

    return (
        <div className="App">
            <TodoList todosFromStorage={todosFromStorage} />
        </div>
    );
}

export default App;
