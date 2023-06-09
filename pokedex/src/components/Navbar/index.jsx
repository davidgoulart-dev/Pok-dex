import * as React from 'react';
 import styles from './styles.module.scss';

export default function Navbar({pokemonFilter}) {
  return (
    <nav className={styles.navContent}>
        <img src="assets/pokedex.png" alt="" srcset="" />
       <div className={styles.searchBox}>
          <input onChange={ (e) => pokemonFilter(e.target.value) } className={styles.searchText} type="text" placeholder="Pesquisar" />
          <a href='#'>
            <img className={styles.searchIcon} src="assets/loupe.png" alt="search-icon" srcset="" />
          </a>
       </div>
    </nav>
  );
   
}