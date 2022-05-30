import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './index';

import { episodeMock } from '../../mocks/episodeMock';

describe('<Episode />', () => {
    it('should render Episode correctly', () => {
        expect.assertions(3);

        const { debug } = render(<Episode {...episodeMock} />);

        expect(screen.getByText(/Pilots/i)).toBeInTheDocument();
        expect(screen.getByText(/Temp:/i)).toBeInTheDocument();
        expect(screen.getByText(/Data de exibição:/i)).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        render(<Episode {...episodeMock} />);

        expect(screen.getByText(/Pilots/i).parentElement)
            .toMatchSnapshot();
    });
});

// Testado