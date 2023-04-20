import * as React from 'react';
 import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navContent}>
        <img src="assets/pokedex.png" alt="" srcset="" />
        <ul>
            <li> <a href="/">Home</a> </li> 
            <li> <a href="/about">About</a> </li>
            <li> <a href="/contact">Contact</a> </li>
        </ul>
    </nav>
  );
   
}