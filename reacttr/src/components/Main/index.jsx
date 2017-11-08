import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
    //Cuando cambiamos el stado de los componentes
    //Este componenete llama nuevamente a render, 
    //por tal motivo el cambiar el estado de un componenete
    //hace que se re renderice el componenete con los nuevos elementos
    //a this.state podemos cargarle lo que querramos, pero al cambiar estos
    //atributos u objetos, estamos cambiando el estado del componentes

    constructor () {
        super()
        this.state = {
            messages: [
                       {
                           text: 'Este es el comentario a leer',
                           picture: 'https://lh6.googleusercontent.com/-o2eodIl4xGo/AAAAAAAAAAI/AAAAAAAAAVc/Qf6DMl0XM9U/s56-c-k-no/photo.jpg',
                           displayName: 'Gastiiii',
                           username: 'gastonrd7',
                           date: Date.now() - 180000
                        },
                         {
                           text: 'Este es  un nuevo Mensaje',
                           picture: 'https://lh6.googleusercontent.com/-o2eodIl4xGo/AAAAAAAAAAI/AAAAAAAAAVc/Qf6DMl0XM9U/s56-c-k-no/photo.jpg',
                           displayName: 'Gastiiii',
                           username: 'gastonrd7',
                           date: Date.now() - 100000
                        }
                   ]
        }
    }
    render () {
        return (
            <MessageList messages={this.state.messages} />
        )
    }
}

export default Main