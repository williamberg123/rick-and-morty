import React from 'react';
import { screen, render } from '@testing-library/react';
import LoadingInfo from './LoadingInfo';

describe('<LoadingInfo />', () => {
    it('should render informations correctly', () => {
        expect.assertions(4);
        render(<LoadingInfo total={826} loaded={20} />);

        expect(screen.getByText(/Total:/i)).toBeInTheDocument();
        expect(screen.getByText(/Total:/i)).toHaveClass('Loading-total');

        expect(screen.getByText(/Carregado até o momento:/i)).toBeInTheDocument();
        expect(screen.getByText(/Carregado até o momento:/i)).toHaveClass('Loading-loaded-count');
    });

    it('should match snapshot', () => {
        render(<LoadingInfo total={826} loaded={20} />);

        expect(screen.getByText(/Total:/i).parentElement)
            .toMatchSnapshot();
    });
});

// Testado