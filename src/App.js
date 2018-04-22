import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import User from './components/User';
import Songs from './components/Songs';
import Books from './components/Books';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/users/:user' component={User} />
          <Route path='/songs' component={Songs} />
          <Route path='/books' component={Books} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
