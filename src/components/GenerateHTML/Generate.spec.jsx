import React from 'react';
import { screen, render } from '@testing-library/react';
import GenerateHTML from './index';

import { characterMock } from '../../mocks/characterMock';
import { locationsMock } from '../../mocks/locationsMock';

describe('<GenerateHTML />', () => {
    it('should render 20 characters', () => {
        const { debug } = render(<GenerateHTML optionToRender="character" dataToShow={[...characterMock]} />);
        // debug();
        
        expect(screen.getAllByRole('img', { name: /Rick Sanchez/i })).toHaveLength(20);
        expect(screen.getAllByRole('heading', { name: /Rick Sanchez/i })).toHaveLength(20);
        expect(screen.getAllByText(/human/i)).toHaveLength(20);
    });

    it('should render 20 locations', () => {
        const { debug } = render(<GenerateHTML optionToRender="location" dataToShow={[...locationsMock]} />);
        // debug();
        
        expect(screen.getAllByText(/earth/i)).toHaveLength(20);
        expect(screen.getAllByText(/Dimension C-137/i)).toHaveLength(20);
    });
});