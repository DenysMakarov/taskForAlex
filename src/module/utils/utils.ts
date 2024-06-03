import {Todo} from "../interfaces";

export const loadTodosFromLocalStorage = () : Todo[] => {
    const todosJson = localStorage.getItem('todos');
    if (todosJson) {
        try {
            return JSON.parse(todosJson);
        } catch (error) {
            console.error('Error parsing todos from localStorage', error);
            return [];
        }
    }
    return [];
};

export const saveTodosToLocalStorage = (todos: Todo[]): void => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

