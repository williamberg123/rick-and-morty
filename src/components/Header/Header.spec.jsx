import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('<Header />', () => {
    it('should render span with the text', () => {
        render(<Header />);

        expect(screen.getByText(/rick & morty/i)).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        render(<Header />);
        expect(screen.getByText(/rick & morty/i).parentElement).toMatchSnapshot();
    });
});

// Testado