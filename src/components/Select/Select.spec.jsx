import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Select from './index';

describe('<Select />', () => {
    it('should render select with options', () => {
        const fn = jest.fn();
        render(<Select funcChange={fn} />);

        expect(screen.getAllByRole('option')).toHaveLength(3);
    });

    it('should call function when a option is change', () => {
        const fn = jest.fn();
        render(<Select funcChange={fn} />);

        fireEvent.change(screen.getByRole('option', { name: /personagens/i }).parentElement);

        expect(fn).toBeCalledTimes(1);
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        render(<Select funcChange={fn} />);
        
        expect(screen.getByRole('option', { name: /personagens/i }).parentElement)
            .toMatchSnapshot();
    });
});

// Testado