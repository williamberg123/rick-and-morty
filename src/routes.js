import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './templates/Home/Home';
import CharacterPage from './templates/CharacterPage/CharacterPage';
import EpisodePage from './templates/EpisodePage/EpisodePage';
import ErrorPage from './templates/ErrorPage/ErrorPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/rick-and-morty" element={ <Home /> } />
            <Route path="/rick-and-morty/personagem/:id" element={ <CharacterPage /> } />
            <Route path="/rick-and-morty/episode/:id" element={ <EpisodePage /> } />
            <Route path="/rick-and-morty/error" element={ <ErrorPage /> } />
            <Route path="*" element={ <ErrorPage /> } />
        </Routes>
    );
}