import React from 'react';
import { screen, render } from '@testing-library/react';
import InfoContainer from './index';

describe('<InfoContainer />', () => {
    it('should render correctly', () => {
        expect.assertions(5);

        const fn = jest.fn();
        render(
            <InfoContainer
                funcChange={fn}
                funcSearch={fn}
                dataToShow={Array(20).fill('exemplo')}
                totalToLoad={826}
            />
            );

        expect(screen.getAllByRole('option')).toHaveLength(3);
        expect(screen.getByPlaceholderText(/digite aqui para procurar/i)).toBeInTheDocument();
        expect(screen.getByText(/total:/i)).toBeInTheDocument();
        expect(screen.getByText(/carregado até o momento:/i)).toBeInTheDocument();

        expect(screen.queryByText(/Não há resultados para/i)).not.toBeInTheDocument();
    });

    it('should no render data', () => {
        const fn = jest.fn();

        const { debug } = render(
            <InfoContainer
                funcChange={fn}
                funcSearch={fn}
                dataToShow={Array(0).fill()}
                totalToLoad={826}
                searchedValue="blablabla"
            />
        );

        expect(screen.getByText(/Não há resultados para/i)).toBeInTheDocument();
    });
});

// Testado