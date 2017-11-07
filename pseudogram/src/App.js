import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor(){
    super();
    //this.state = {
    //  user
    //};
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado session`))
    .catch(error => console.log(`${error.code}: ${error.message}`));
  }

  renderLoginButton(){
    //Si esta logueado hace algo
    //if (this.state.user){
    //  return (
    //    min 19.20 del segundo video
    //  );
    //}



    //Si no lo esta hace otra
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pseudogram</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.handleAuth}>Login con Google</button>
        </p>
      </div>
    );
  }
}

export default App;
