import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InitialPage from '../InitialPage/';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<InitialPage/>}/>
        </Routes>
    </BrowserRouter>
);

export default Rotas;