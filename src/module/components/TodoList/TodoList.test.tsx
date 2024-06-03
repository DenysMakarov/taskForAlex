import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import {Todo} from "../../interfaces";
const todosFromStorage: Todo[] = [];


describe('TodoList component', () => {
    const mockTodosFromStorage = [
        { id: 1, title: 'Test Todo 1', completed: false },
        { id: 2, title: 'Test Todo 2', completed: true },
    ];

    beforeEach(() => {
        localStorage.clear();
    });

    test('renders the component and checks initial state', () => {
        render(<TodoList todosFromStorage={mockTodosFromStorage} />);
        expect(screen.getByText('TODO List')).toBeInTheDocument();
        expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
        expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
    });

    test('adds a new todo item', () => {
        render(<TodoList todosFromStorage={[]} />);
        const inputElement = screen.getByPlaceholderText('Add a new task');
        // const inputElement = screen.getByPlaceholderText('Add new todo');
        const addButton = screen.getByText('Add');

        fireEvent.change(inputElement, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles a todo item', () => {
        render(<TodoList todosFromStorage={mockTodosFromStorage} />);
        const toggleButton = screen.getAllByText('Active')[0];
        fireEvent.click(toggleButton);

        expect(screen.queryByText('Test Todo 1')).toBeInTheDocument();
    });

    test('should add a new todo', () => {
        render(<TodoList todosFromStorage={todosFromStorage} />);

        const inputElement = screen.getByPlaceholderText('Add a new task');
        const addButton = screen.getByText('Add');

        fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
        fireEvent.click(addButton);

        const todoElement = screen.getByText('Test Todo');
        expect(todoElement).toBeInTheDocument();
    });

    test('should add a new todo to localStorage', () => {
        const localStorageMock = (function() {
            let store: { [key: string]: string } = {};
            return {
                getItem(key: string) {
                    return store[key] || null;
                },
                setItem(key: string, value: string) {
                    store[key] = value;
                },
                clear() {
                    store = {};
                },
                removeItem(key: string) {
                    delete store[key];
                }
            };
        })();
        Object.defineProperty(window, 'localStorage', { value: localStorageMock });

        render(<TodoList todosFromStorage={todosFromStorage} />);

        const inputElement = screen.getByPlaceholderText('Add a new task');
        const addButton = screen.getByText('Add');

        fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
        fireEvent.click(addButton);

        const todos = JSON.parse(localStorage.getItem('todos') || '[]');
        expect(todos.length).toBe(1);
        expect(todos[0].title).toBe('Test Todo');
    });
});



