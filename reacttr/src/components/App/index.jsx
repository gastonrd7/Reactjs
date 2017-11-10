import React, { Component } from 'react'
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
            <div>
                <Header />
                <Main user={this.state.user} />
            </div>
        )
    }
}

export default App