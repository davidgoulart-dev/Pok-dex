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
    var endpoints = [];
    for (var i = 1; i < 50; i++ ) {
        endpoints.push(  `https://pokeapi.co/api/v2/pokemon/${i}/` );
    }

   var response = axios.all (endpoints.map(endpoint => axios.get(endpoint))).then(( res ) => setPokemons(res) );

   };
   const pokemonFilter = (name) => {
    var filteredPokemons = []
    if (name === '') {
        getPokemons();
    }
    for (var i in pokemons) {
        if (pokemons[i].data.name.includes(name)) {
            filteredPokemons.push(pokemons[i]);
                    }
    }   
        console.log( filteredPokemons)
        setPokemons(filteredPokemons);
   }
    return (
        <>
        <Navbar pokemonFilter={pokemonFilter}/>
               
        <section className={styles.card} >
            {pokemons.map((pokemon, key) => <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} key={key} /> )}
       
       
        </section >         
        </>
        
    );
};