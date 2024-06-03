import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';


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
});

