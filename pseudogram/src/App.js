import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      //user = null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  //componente de cicloo de vida, se dispara una vez el componenete es renderizado en el cliente
  componentWillMount (){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        //user: user ...si la clave y el valor son iguales, lo escribimos una unica vez
        user
      });
    });
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado session`))
    .catch(error => console.log(`${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
    .then(result => console.log(`El usuario ha salido`))
    .catch(error => console.log(`${error.code}: ${error.message}`));
  }

  renderLoginButton(){
    if (this.state.user){
      return (
       <div> 
         <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
         <p>Hola {this.state.user.displayName} </p> 
         <button onClick={this.handleLogout}>Salir</button>
       </div>
      );
    } else {
      return (<button onClick={this.handleAuth}>Login con google</button>);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pseudogram</h1>
        </header>
        <p className="App-intro">
          { this.renderLoginButton() }
        </p>
      </div>
    );
  }
}

export default App;
