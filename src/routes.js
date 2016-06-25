import React from "react";
import { Route } from 'react-router';

import App from './components/App'
import Counter from './containers/Counter'
import Wheelchair from './containers/Wheelchair'
import Destination from './containers/Destination'

const Routes = (
  <Route component={App}>
    <Route path="/" component={Counter} />
    <Route path="/wc" component={Wheelchair}/>
    <Route path="/dest" component={Destination}/>
  </Route>
);
export default Routes;
