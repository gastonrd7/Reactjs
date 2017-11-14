import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Profile-bar.css'

class ProfileBar extends Component{
    //Aparentemente no ahce falta pasarle las props por el contructor
    //solo lo usamos si vamos a cambiar el estado del componente al contructor
    render () {
        return (
            <div className={styles.root}>
                <Link to='/profile'>
                    <figure>
                        <img className={styles.avatar} src={this.props.picture} />
                    </figure>
                </Link>
                <span className={styles.username}>  Hola @ {this.props.username }! </span>
                <button onClick={this.props.onOpenText} className={styles.button}>
                    <span className="fa fa-lg fa-edit"></span> Tweet!
                </button>
            </div>
        )
    }
}

export default ProfileBar

