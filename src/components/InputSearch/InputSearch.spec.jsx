import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputSearch from './InputSearch';

describe('<InputSearch />', () => {
    it('should render InputSearch correctly', () => {
        const fn = jest.fn();
        render(<InputSearch funcSearch={fn} searchedValue="morty" />);

        expect(screen.getByPlaceholderText(/digite aqui para procurar/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/digite aqui para procurar/i).value).toBe('morty');
    });
    
    it('should call function when is clicked', async () => {
        expect.assertions(2);

        const fn = jest.fn();
        render(<InputSearch funcSearch={fn} />);

        await userEvent.type(screen.getByPlaceholderText(/digite aqui para procurar/i), 'rick');

        expect(screen.getByPlaceholderText(/digite aqui para procurar/i).value).toBe('rick');
        expect(fn).toBeCalledTimes(4);
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        const { debug } = render(<InputSearch funcSearch={fn} />);

        expect(screen.getByPlaceholderText(/digite aqui para procurar/i).parentElement)
            .toMatchSnapshot();
    });
});

// Testado