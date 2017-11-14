import React, { Component } from 'react'
//import { HashRouter, Match } from 'react-router'
//import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { Switch, BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom'
import 'normalize-css'
import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'

class App extends Component{
    constructor(){
        super()
        this.state = {
            user: {
                photoURL: 'https://lh6.googleusercontent.com/-o2eodIl4xGo/AAAAAAAAAAI/AAAAAAAAAVc/Qf6DMl0XM9U/s56-c-k-no/photo.jpg',
                email: 'gaston.rd7@gmail.com',
                displayName: 'Gaston Ruiz Diaz',
                location: 'Buenos Aires, Argentina'
            }
        }
    }

    

    render () {

        // let PrimaryLayout = props => (
        //        <Main user={this.state.user} />
        //     );

        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' render={() => {
                            if (this.state.user){
                                return (
                                    <Main user={this.state.user} />
                                )
                            } else {
                                // render <login />
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