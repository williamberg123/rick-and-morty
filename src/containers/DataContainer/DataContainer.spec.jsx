import React from 'react';
import { screen, render } from '@testing-library/react';
import DataContainer from './DataContainer';

import { characterMock } from '../../mocks/characterMock';

describe('<DataContainer />', () => {
    it('should render characters when optionToRender is character', () => {
        const { debug } = render(<DataContainer dataToShow={characterMock} optionToRender="character" />);
        debug()

        expect(screen.getAllByRole('heading', {name: /Rick Sanchez/i})).toHaveLength(20);
    });
});