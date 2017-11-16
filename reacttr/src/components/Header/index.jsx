//import React, { Component } from 'react'
import React from 'react'
import styles from './Header.css'

// class Header extends Component{
//     render () {
//         return (
//             <header className={styles.root} >
//                 <h1 className={styles.logo}>reacttr Gaston </h1>
//             </header>
//         )
//     }
// }

function Header () {
    return (
        <header className={styles.root} >
            <h1 className={styles.logo}>reacttr Gaston </h1>
        </header>
    )
}

export default Header