import React from "react";
import { Route } from 'react-router';

import App from './components/App'
import Counter from './containers/Counter'
import Wheelchair from './components/Wheelchair'

const Routes = (
  <Route component={App}>
    <Route path="/" component={Counter} />
    <Route path="/wc" component={Wheelchair}/>
  </Route>
);
export default Routes;
