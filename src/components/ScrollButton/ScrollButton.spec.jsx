import React from 'react';
import { screen, render } from '@testing-library/react';
import ScrollButton from './index';

describe('<ScrollButton />', () => {
    it('should render button correctly', () => {
        const { debug } = render(<ScrollButton direction="to-up" />);
        // debug()

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should do this when direction is to-up', () => {
        render(<ScrollButton direction="to-up" />);
        const button = screen.getByRole('button');
        
        expect(button).toHaveClass('ScrollButton-to-up');
    });

    it('should do this when direction is to-down', () => {
        render(<ScrollButton direction="to-down" />);
        const button = screen.getByRole('button');
        
        expect(button).toHaveClass('ScrollButton-to-down');
    });

    it('should match snapshot', () => {
        render(<ScrollButton direction="to-up" />);

        expect(screen.getByRole('button')).toMatchSnapshot();
    });
});

// Testado