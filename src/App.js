import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/aboutme' children={<MainContainer tab="aboutme"/>} />
                        <Route path='/education' children={<MainContainer tab="education"/>} />
                        <Route path='/experience' children={<MainContainer tab="experience"/>} />
                        <Route path='/work' children={<MainContainer tab="work"/>} />
                        <Route path='/photography' children={<MainContainer tab="photography"/>} />
                        <Route path='/' children={<MainContainer tab="aboutme"/>} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
