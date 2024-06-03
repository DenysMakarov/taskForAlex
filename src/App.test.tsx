import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import TodoList from "./module/components/TodoList/TodoList";
import Btn from "./module/shared/Btn/Btn";

describe('App Component', () => {

  test('renders TODO List heading', () => {
    render(<App />);
    const heading = screen.getByText(/TODO List/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders input field and add button', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByRole('button', { name: /Add/i });
    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('adds a new task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByRole('button', { name: /Add/i });

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    const newTask = screen.getByText(/New Task/i);
    expect(newTask).toBeInTheDocument();
  });
});





