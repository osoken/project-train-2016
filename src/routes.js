import React from "react";
import { Route } from 'react-router';

import App from './components/App'
import Counter from './containers/Counter'
import Wheelchair from './containers/Wheelchair'
import Destination from './containers/Destination'
import Departure from './containers/Departure'
import Way from './containers/Way'

const Routes = (
  <Route component={App}>
    <Route path="/" component={Counter} />
    <Route path="/wheelchair" component={Wheelchair}/>
    <Route path="/destination" component={Destination}/>
    <Route path="/departure" component={Departure}/>
    <Route path="/way" component={Way}/>
  </Route>
);
export default Routes;
