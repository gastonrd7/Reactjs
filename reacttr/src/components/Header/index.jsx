import React, { Component } from 'react'
//vamos a poder importar estilos, como sie
//fueran ficheros de javaScript
import styles from './Header.css'

class Header extends Component{
    render () {
        return (
            <header className={styles.root} >
                <h1 className={styles.logo}>reacttr Gaston </h1>
            </header>
        )
    }
}

export default Header