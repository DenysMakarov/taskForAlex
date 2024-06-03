import React from 'react';import './App.scss';
import TodoList from "./module/components/TodoList/TodoList";
import {loadTodosFromLocalStorage} from "./module/utils/utils";

function App() {
    const todosFromStorage = loadTodosFromLocalStorage() || [];

    return (
        <div className="App">
            <TodoList todosFromStorage={todosFromStorage} />
        </div>
    );
}

export default App;
