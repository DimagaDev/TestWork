import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import { Lists } from './Lists';

import './App.css';
const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/albums/:id" children={<Lists type='albums' />} />
      <Route exact={true} path="/posts/:id" children={<Lists type='posts' />} />
  </Switch>
);

export default App;
