import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import LoadMoreButton from './LoadMoreButton';

describe('<LoadMoreButton />', () => {
    it('should call function when is clicked', () => {
        const fn = jest.fn();
        render(<LoadMoreButton funcLoadMore={fn} />);
        const button = screen.getByRole('button', { name: /carregar mais/i });

        fireEvent.click(button);

        expect(fn).toBeCalled();
    });

    it('should to be disabled when disabled is true', () => {
        const fn = jest.fn();
        render(<LoadMoreButton funcLoadMore={fn} isDisabled />);
        const button = screen.getByRole('button', { name: /carregar mais/i });

        expect(button).toHaveProperty('disabled', true);
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        render(<LoadMoreButton funcLoadMore={fn} />);
        
        const button = screen.getByRole('button', { name: /carregar mais/i });
        expect(button).toMatchSnapshot();
    });
});

// Testado