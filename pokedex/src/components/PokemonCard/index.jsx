import * as React from 'react';
import styles from './styles.module.scss';

export default function PokemonCard() {
  return (
  <div className={styles.cardContent}>
    <div className={styles.card}>
        <div className='topCard'>
            <h2 className='title'>escreva</h2>
            <span className='secondtext'>escreva aqui</span>
        </div>
        <div className={styles.mediaCard}>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon" className='img'/>
        </div>
        <div className='bottomCard'>
            <span className='text'>escreva aqui informando sobre seu pokemon, ou pega de uma api</span>
            <div className='actionsCard'>
                <button className='btn'>Ver mais</button>
            </div>
    </div>
  </div>
    </div>
    );      
}


