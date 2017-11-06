import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyBOi6iUQ2aE_Sq5halLksxGF9wYQPZeX0Q",
    authDomain: "pseudogram-16ac7.firebaseapp.com",
    databaseURL: "https://pseudogram-16ac7.firebaseio.com",
    projectId: "pseudogram-16ac7",
    storageBucket: "pseudogram-16ac7.appspot.com",
    messagingSenderId: "607605482564"
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
