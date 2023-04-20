import React from 'react';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import { Container } from '@mui/material';
import styles from './styles.module.scss';



export const Home = () => {
    return (
        <>
        <Navbar/>
               
        <section className={styles.card}>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        </section>         
        </>
        
    );
};