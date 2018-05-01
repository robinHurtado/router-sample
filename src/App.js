import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import User from './components/User';
import Movies from './components/Movies';
import Books from './components/Books';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/users/:user' component={User} />
          <Route path='/movies' component={Movies} />
          <Route path='/books' component={Books} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
