import React from 'react';
import { render, screen } from '@testing-library/react';
import Location from './index';

describe('<Location />', () => {
    it('should render corretcly', () => {
        const { debug } = render(<Location name="Earth" type="planet" dimension="C-137" />);

        expect(screen.getByText('Earth')).toBeInTheDocument();
        expect(screen.getByText(/tipo:/i)).toBeInTheDocument();
        expect(screen.getByText(/Dimensão:/i)).toBeInTheDocument();
        // debug();
    });

    it('should to have text desconhecido when type is unknown', () => {
        render(<Location name="Earth" type="unknown" dimension="C-137" />);
        
        expect(screen.getByText(/desconhecido/i)).toBeInTheDocument();
    });

    it('should to have text desconhecida when dimension is unknown', () => {
        const { debug } = render(<Location name="Earth" type="planet" dimension="unknown" />);
        
        expect(screen.getByText(/desconhecida/i)).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        render(<Location name="Earth" type="planet" dimension="C-137" />);
        expect(screen.getByText('Earth').parentElement)
            .toMatchSnapshot();
    });
});

// Testado