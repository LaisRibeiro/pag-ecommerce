import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import BannerHome from '../views/BannerHome';

export default function Routes() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Router path="/banner" component={BannerHome}/>
        </Switch>
    </Router>
  );
}
