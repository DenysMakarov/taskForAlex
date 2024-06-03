import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoItem from './TodoItem';

describe('TodoItem component', () => {
    const mockToggleTodo = jest.fn();
    const todos = [
        { id: 1, title: 'Test Todo 1', completed: false },
        { id: 2, title: 'Test Todo 2', completed: true },
    ];

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<TodoItem todos={todos} toggleTodo={mockToggleTodo} />);
    });

    test('renders todo items', () => {
        const todoElements = screen.getAllByRole('listitem');
        expect(todoElements).toHaveLength(2);
        expect(todoElements[0]).toHaveTextContent('Test Todo 1');
        expect(todoElements[1]).toHaveTextContent('Test Todo 2');
    });

    test('shows correct button text based on todo completed state', () => {
        const buttons = screen.getAllByRole('button');
        expect(buttons[0]).toHaveTextContent('Active');
        expect(buttons[1]).toHaveTextContent('Done');
    });

    test('calls toggleTodo function when button is clicked', () => {
        const buttons = screen.getAllByRole('button');
        fireEvent.click(buttons[0]);
        expect(mockToggleTodo).toHaveBeenCalledWith(1);
        fireEvent.click(buttons[1]);
        expect(mockToggleTodo).toHaveBeenCalledWith(2);
    });
});
