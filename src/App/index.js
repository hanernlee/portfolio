import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Menu from '../Menu';
import Home from '../Home';
import Work from '../Work';
import Contact from '../Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/work/:id?" component={Work} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
