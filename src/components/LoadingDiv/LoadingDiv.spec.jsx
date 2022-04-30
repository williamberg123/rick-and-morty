import React from 'react';
import { screen, render } from '@testing-library/react';
import LoadingDiv from './LoadingDiv';

describe('<LoadingDiv />', () => {
    it('should render all dots', () => {
        render(<LoadingDiv />);

        expect(screen.getByTestId('LoadingDiv').getElementsByClassName('dots'))
            .toHaveLength(5);
    });

    it('should match snapshot', () => {
        render(<LoadingDiv />);

        expect(screen.getByTestId('LoadingDiv')).toMatchSnapshot();
    });
});

// Testado