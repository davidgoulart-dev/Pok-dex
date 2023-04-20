import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import axios from 'axios';
import styles from './styles.module.scss';



export const Home = () => {
   const [pokemons, setPokemons] = React.useState([]);
    useEffect(() => {
     getPokemons(); 
   }, []);
   const getPokemons = () => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=50").then((response) => { setPokemons(response.data.results);});
   };
   
    return (
        <>
        <Navbar/>
               
        <section className={styles.card} >
            {pokemons.map((pokemon, key) => <PokemonCard name={pokemon.name}key={key} /> )}
       
       
        </section >         
        </>
        
    );
};