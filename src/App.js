import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <main>
                    <Switch>
                        <Route path='/aboutme' render={(props) => (
                            <MainContainer {...props} tab="aboutme" />
                        )}></Route>
                        <Route path='/education' render={(props) => (
                            <MainContainer {...props} tab="education" />
                        )}></Route>
                        <Route path='/experience' render={(props) => (
                            <MainContainer {...props} tab="experience" />
                        )}></Route>
                        <Route path='/work' render={(props) => (
                            <MainContainer {...props} tab="work" />
                        )}></Route>
                        <Route path='/photography' render={(props) => (
                            <MainContainer {...props} tab="photography" />
                        )}></Route>
                        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
