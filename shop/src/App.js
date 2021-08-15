import React, { Component } from 'react';
import Store from './Component/Store';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {default as NavBar} from './Component/NavBar.js';
import BookDetail from './Component/BookDetail';

function App() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Store} exact/>
          <Route path="/BookDetail" component={BookDetail}/>
        </Switch>
      </Router>
    );
}

export default App;