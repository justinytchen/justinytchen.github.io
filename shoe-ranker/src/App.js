import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer.js';
import firebase from 'firebase'


class App extends React.Component {
    constructor(props){
        super(props);
        var firebaseConfig = {
            apiKey: "AIzaSyDV00JLjicImS95AY_XuP41zPUW5dZs5aA",
            authDomain: "shoeranker-3962c.firebaseapp.com",
            databaseURL: "https://shoeranker-3962c.firebaseio.com",
            projectId: "shoeranker-3962c",
            storageBucket: "shoeranker-3962c.appspot.com",
            messagingSenderId: "424452244786",
            appId: "1:424452244786:web:488597e7d61d32b6"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
    render(){
        return (
            <div className="App">
                <MainContainer db={firebase}/>
            </div>
        );
    }
}

export default App;
