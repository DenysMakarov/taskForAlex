// src/components/Form.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('TodoForm', () => {
    const addTodo = jest.fn();

    test('renders input and button', () => {
        render(<Form addTodo={addTodo} />);
        expect(screen.getByPlaceholderText('Add a new task')).toBeInTheDocument();
        expect(screen.getByText('Add')).toBeInTheDocument();
    });

    test('calls addTodo on form submit', () => {
        render(<Form addTodo={addTodo} />);
        const input = screen.getByPlaceholderText('Add a new task');
        const button = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(button);

        expect(addTodo).toHaveBeenCalledWith('New Task');
        expect(input).toHaveValue('');
    });

    test('does not call addTodo with empty input', () => {
        render(<Form addTodo={addTodo} />);
        const button = screen.getByText('Add');

        fireEvent.click(button);
        expect(addTodo).not.toHaveBeenCalled();
    });
});
