// Btn.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Btn from './Btn';

describe('Btn Component', () => {
    const mockHandleClick = jest.fn();

    it('renders Btn component', () => {
        render(<Btn text="Test Button" handleClick={mockHandleClick} />);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('calls handleClick when button is clicked', () => {
        render(<Btn text="Test Button" handleClick={mockHandleClick} />);
        const button = screen.getByText('Test Button');

        fireEvent.click(button);
        expect(mockHandleClick).toHaveBeenCalled();
    });
});
