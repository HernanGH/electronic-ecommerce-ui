import React, { Component } from 'react';
import Reflux from 'reflux';
import HomePage from './pages/HomePage';
import logo from './logo.svg';
import history from './history';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Reflux.Component {

  render() {
    return (
      <Router history={history} >
        <Switch>
          <Route exact path='/' render={(props) => { return <HomePage />; }} />
        </Switch>
      </Router>

    );
  }
}

export default App;
