import React, { Component } from 'react'
//import { HashRouter, Match } from 'react-router'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import 'normalize-css'
import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component{
    constructor(){
        super()
        this.state = {
            user: {
                photoURL: 'https://lh6.googleusercontent.com/-o2eodIl4xGo/AAAAAAAAAAI/AAAAAAAAAVc/Qf6DMl0XM9U/s56-c-k-no/photo.jpg',
                email: 'gaston.rd7@gmail.com',
                displayName: 'Gaston Ruiz Diaz'
            }
        }
    }
    render () {
        return (
            <Router>
                <div>
                    https://reacttraining.com/react-router/web/example/route-config
                </div>
            </Router>
            // <HashRouter>
            //     <div>
            //         <Header />
                    
            //         <Match exactly pattern='/' render={() => {
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