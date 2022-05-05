import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './templates/Home/Home';
import CharacterPage from './templates/CharacterPage/CharacterPage';

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/rick-and-morty" element={ <Home /> } />
            <Route path="/rick-and-morty/personagem/:id" element={ <CharacterPage /> } />
        </Routes>
    );
}