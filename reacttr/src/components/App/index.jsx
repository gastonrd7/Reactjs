import React, { Component } from 'react'
//import { HashRouter, Match } from 'react-router'
//import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { Switch, BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom'
import 'normalize-css'
import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'
import firebase from 'firebase'
import store from '../../redux/store';
import { cargarUsuario } from '../../redux/actionCreators';

class App extends Component{
    constructor(){
        super()
        this.state = {
            user: null
            // {
            //     photoURL: 'https://lh6.googleusercontent.com/-o2eodIl4xGo/AAAAAAAAAAI/AAAAAAAAAVc/Qf6DMl0XM9U/s56-c-k-no/photo.jpg',
            //     email: 'gaston.rd7@gmail.com',
            //     displayName: 'Gaston Ruiz Diaz',
            //     location: 'Buenos Aires, Argentina'
            // }
        }

        this.handleOnAuth = this.handleOnAuth.bind(this)
        this.handleOnAuthGoogle = this.handleOnAuthGoogle.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

     //componente de cicloo de vida, se dispara una vez el componenete es renderizado en el cliente y todo el DOM se creo
  componentWillMount (){
      //buen lugar para apllicar librerias externas
      // este escuchador se va a disparar cada vez que se conecte o se desconecte el usuario "onAuthStateChanged"
    
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            store.dispatch(cargarUsuario(user));
            // this.setState({
            //     user: user
            // })
        }  else
        {
            store.dispatch(cargarUsuario(user));
            //  this.setState({
            //      user: null
            //  })
        }
    });

    store.subscribe(() => {
      this.setState({
        user: store.getState().user
      })
    })

  }

    handleOnAuth(){
        const provider = new firebase.auth.GithubAuthProvider();
    
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado session`))
        .catch(error => console.log(`${error.code}: ${error.message}`));
    }

    handleOnAuthGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado session con google`))
        .catch(error => console.log(`${error.code}: ${error.message}`));
    }
    
      handleLogout() {
        firebase.auth().signOut()
        .then(result => console.log(`El usuario ha salido`))
        .catch(error => console.log(`${error.code}: ${error.message}`));
    }

    render () {

        return (
            <Router>
                <div>
                    <Header user={this.state.user}/>
                    <Switch>
                        <Route exact path='/' render={() => {
                            if (this.state.user){
                                return (
                                    <Main 
                                        user={this.state.user}
                                        onLogout={this.handleLogout} 
                                    />
                                )
                            } else {
                                return (
                                    <Login 
                                        onAuth={this.handleOnAuth}
                                        onAuthG={this.handleOnAuthGoogle}
                                    />
                                )
                            }
                        }} /> 
                        
                        <Route path='/profile' render={() => {
                            return (
                                    <Profile 
                                        picture={this.state.user.photoURL}
                                        username={this.state.user.email.split('@')[0]}
                                        displayName={this.state.user.displayName}
                                        location={this.state.user.location}
                                        emailAddress={this.state.user.email}
                                    />
                                )
                        }} />

                        <Route path='/user/:username' render={({ params }) => {
                            return (
                                    <Profile 
                                        //username={params.username}
                                        displayName={username}
                                        //displayName='hola'
                                        //emailAddress={params.username}
                                    />
                                )
                        }} />
                    </Switch>
                    
                </div>
            </Router>
            // <HashRouter>
            //     <div>
            //         <Header />
                    
            //         <Match exactly path='/' render={() => {
            //             if (this.state.user){
            //                 return (
            //                     <Main user={this.state.user} />
            //                 )
            //             } else {
            //                 // render <login />
            //             }
            //         }} />

            //         <Match pattern='/profile' render={() => {
            //             //render <profile />
            //         }} />

            //         <Match pattern='/user/:username' render={({ params }) => {
            //             //render <profile /> pasando params.username
            //         }} />
                    
            //     </div>
            // </ HashRouter>
        )
    }
}

export default App