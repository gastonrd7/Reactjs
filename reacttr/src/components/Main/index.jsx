import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
    //Cuando cambiamos el stado de los componentes
    //Este componenete llama nuevamente a render, 
    //por tal motivo el cambiar el estado de un componenete
    //hace que se re renderice el componenete con los nuevos elementos
    //a this.state podemos cargarle lo que querramos, pero al cambiar estos
    //atributos u objetos, estamos cambiando el estado del componentes

    constructor (props) {
        super(props)
        this.state = {
            //creamos el estado user en este componenete, pero lo estamos heredando del componente padre
            //que seria app/index
            ////user: this.props.user,
            //pero tambien podemos copiar el objeto que nos inyectan y añadirle cosas
            user: Object.assign({}, this.props.user, {retweets: []}, {favorites: []}),
            openText: false,
            userNameToReply: '',
            messages: [
                       {
                           id: uuid.v4(),
                           text: 'Este es el comentario a leer',
                           picture: 'https://lh6.googleusercontent.com/-o2eodIl4xGo/AAAAAAAAAAI/AAAAAAAAAVc/Qf6DMl0XM9U/s56-c-k-no/photo.jpg',
                           displayName: 'Gastiiii',
                           username: 'gastonrd7',
                           date: Date.now() - 180000,
                           retweets: 0,
                           favorites: 0
                        },
                         {
                           id: uuid.v4(),
                           text: 'Este es  un nuevo Mensaje',
                           picture: 'https://lh6.googleusercontent.com/-o2eodIl4xGo/AAAAAAAAAAI/AAAAAAAAAVc/Qf6DMl0XM9U/s56-c-k-no/photo.jpg',
                           displayName: 'Gastiiii',
                           username: 'gastonrd7',
                           date: Date.now() - 100000,
                           retweets: 0,
                           favorites: 0
                        }
                   ]
        }

        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
        this.handleRetweet = this.handleRetweet.bind(this)
        this.handleFavorite = this.handleFavorite.bind(this)
        this.handleReplyTweet = this.handleReplyTweet.bind(this)
    }

    handleSendText (event) {
            //eliminamos el comportamiento por defento de ese evento
            event.preventDefault()
            let newMessage = {
                id: uuid.v4(),
                username: this.props.user.email.split('@')[0],
                displayName: this.props.user.displayName,
                picture: this.props.user.photoURL,
                date: Date.now(),
                text: event.target.text.value,
                retweets: 0,
                favorites: 0
            }

            this.setState({
                //No usar la funcion push que hace mutar el estado, para luego 
                //usar redax debemos hacerlo con concat
                //messasges: messages.push(newMessage)
                 messages: this.state.messages.concat([newMessage]),
                 openText: false,
                 userNameToReply: ''
            })
        }

    handleCloseText (event) {
            event.preventDefault()
            this.setState( {openText: false, userNameToReply : ''} )
        }

    handleOpenText (event) {
            event.preventDefault()
            //al cambiar openText a true, y esta propiedad esta en estado del 
            //componente, forzamos el metodo render nuevamente a ejecutarse
            this.setState({ 
                openText: true
            })

        }
    
    handleRetweet (msgId) {
            console.log('llego')
             let alreadyRetweet = this.state.user.retweets.filter(rt => rt == msgId)
            if(alreadyRetweet.length == 0){
                let messages = this.state.messages.map(msg => {
                    if(msg.id == msgId){
                        msg.retweets++
                    }
                    return msg
                })
                
                //creo un objeto en base a otro tomando todas sus propiedades
                let user = Object.assign({}, this.state.user)
                user.retweets.push(msgId)

                this.setState({
                    messsages: messages,
                   //messsages,
                    user: user
                    //user
                })
            }
        }
    
    handleFavorite (msgId) {
            let alreadyFavorite = this.state.user.favorites.filter(fav => fav == msgId)
            if(alreadyFavorite.length == 0){
                let messages = this.state.messages.map(msg => {
                    if(msg.id == msgId){
                        msg.favorites++
                    }
                    return msg
                })

                let user = Object.assign({}, this.state.user)
                user.favorites.push(msgId)

                this.setState({
                   messsages: messages,
                   //messsages,
                   user: user
                    //user
                })
            }
        }

    renderOpenText(){
        if(this.state.openText){
            return (
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                    userNameToReply={this.state.userNameToReply} 
                />
            )
        }
    }
    
    handleReplyTweet(msgId, userNameToReply){
        this.setState({
            openText: true,
            userNameToReply: userNameToReply          
        })
    }
    
    render () {
        return (
            //devuelvo siempre un solo elementos
            //en este caso el div engloba los 2 elementos que quiero devolver
            <div>
                <ProfileBar 
                    picture= {this.props.user.photoURL}
                    username= {this.props.user.email.split('@')}
                    //como es llamado por su componente hijo
                    //cuando el manejador de este evento usa el this
                    //no sabe a cual hace referencia
                    //por eso se hace un bind de este handle con el this de este componente
                    onOpenText= {this.handleOpenText} 
                />
                {this.renderOpenText()}
                <MessageList 
                    messages={this.state.messages}
                    onRetweet={this.handleRetweet}
                    onFavorite={this.handleFavorite}
                    onReplyTweet={this.handleReplyTweet}
                />
            </div>
        )
    }
}

export default Main