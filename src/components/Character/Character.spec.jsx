import React from 'react';
import { render, screen } from '@testing-library/react';
import Character from './Character';

describe('<Character />', () => {
    it('should render him elements correctly', () => {
        expect.assertions(3);

        render(<Character name="Rick Sanchez" species="Human" imageUrl="img/img.jpg" />);

        expect(screen.getByRole('img', { name: /rick sanchez/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /rick sanchez/i })).toBeInTheDocument();
        expect(screen.getByText('Human')).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        render(<Character name="Rick Sanchez" species="Human" imageUrl="img/img.jpg" />);
        expect(screen.getByTestId('CharacterDiv')).toMatchSnapshot();
    });
});

// Testado