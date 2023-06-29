import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/page2" component={Page2} />
      <Route path="/" component={Page1} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
