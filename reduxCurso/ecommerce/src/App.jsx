import React, { Component, PropTypes } from 'react'
import Header from './common/header'

class App extends Component {
    render(){
        return(
            <div>
                <Header />
                {this.props.children}
                <footer>&copy; 2017</footer>
            </div>
        )
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
}

export default App