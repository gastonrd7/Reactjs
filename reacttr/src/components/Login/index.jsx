import React, { Component } from 'react'
import styles from './login.css'

class Login extends Component {

    render () {
        return (
            <div className={styles.root}>
                <p className={styles.text}>
                    Necesitamos que inicies sesion con tu cuenta de GitHub
                    para que puedas leer y escribir mensajes
                </p>
                <button
                    onClick={this.props.onAuth}
                    className={styles.button}
                >
                <span className='fa fa-github' />Login con GitHub
                </button>
                <button
                    onClick={this.props.onAuthG}
                    className={styles.button}
                >
                <span className='fa fa-google-plus' />Login con Google
                </button>
            </div>
        )
    }
}

export default Login
