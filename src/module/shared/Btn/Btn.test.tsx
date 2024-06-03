// Btn.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Btn Component', () => {
    const mockHandleClick = jest.fn();

    it('renders Btn component', () => {
        render(<Button text="Test Button" handleClick={mockHandleClick} />);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('calls handleClick when button is clicked', () => {
        render(<Button text="Test Button" handleClick={mockHandleClick} />);
        const button = screen.getByText('Test Button');

        fireEvent.click(button);
        expect(mockHandleClick).toHaveBeenCalled();
    });
});
