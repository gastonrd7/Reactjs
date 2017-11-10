import React, { Component } from 'react'
//import Message from '../Message'
import styles from './input-text.css'

class InputText extends Component {

    render () {
        return (
            //como necesito modificar el estado de la clase padre
            //el manejador del evento onSendText estara en la clase padre, no en esta
            <form className={styles.form} onSubmit={this.props.onSendText}>
                <textarea className={styles.text} name="text" >
                    {(this.props.userNameToReply) ? `@${this.props.userNameToReply} ` : '' }
                </ textarea>
                <div className={styles.buttons}>
                    <button className={styles.close} onClick={this.props.onCloseText}>Cerrar</button>
                    <button className={styles.send} type="submit">Enviar</button>
                </div>
            </form>
        )
    }
}

export default InputText