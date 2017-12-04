import React, { Component, PropTypes } from 'react'

class App extends Component {
    render(){
        return(
            <div>
                <header>Ecommerce</header>
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