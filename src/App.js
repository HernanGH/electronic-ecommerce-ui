import React, { Component } from 'react';
import Reflux from 'reflux';
import HomePage from './pages/HomePage';
import logo from './logo.svg';
import history from './history';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppStore from './AppStore';
import AppActions from './AppActions';

class App extends Reflux.Component {
  constructor (props) {
      super(props);
      this.store = AppStore;
  }
  componentDidMount () {
      AppActions.getUser();
  }
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
