import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Paginas
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repos+" component={Repository} />
  </Switch>
);

export default Routes;