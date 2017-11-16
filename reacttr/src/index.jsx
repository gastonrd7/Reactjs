import React, { Component } from 'react'
//llamamos solo a la carpeta, ya que esta contiene solo//
import { render } from 'react-dom'
import firebase from 'firebase'
//un jsx que se llama index
import App from '../src/components/App/'
//destructuring


  var config = {
    apiKey: "AIzaSyDXcqwfbOUj1xwAYms0ynhSpZ0fsyLIksw",
    authDomain: "curso-reactchat.firebaseapp.com",
    databaseURL: "https://curso-reactchat.firebaseio.com",
    projectId: "curso-reactchat",
    storageBucket: "curso-reactchat.appspot.com",
    messagingSenderId: "592155738728"
  };
  firebase.initializeApp(config);

render(<App />, document.getElementById('root'))
