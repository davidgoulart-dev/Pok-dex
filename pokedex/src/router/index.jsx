import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../pages/Home';

export const index = () => {
    return (
        <Route path='/' element={<Home/>} />
    )
}