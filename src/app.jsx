require( '../public/stylesheets/scss/style.scss' );

var React = require('react');
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './reducers'
// for react-router
import { Router, hashHistory } from 'react-router'
import routes from "./routes.js";

let store = createStore( app )

store.subscribe( () =>
    console.log( store.getState() )
)

render(
  <Provider store={store}>
    <Router children={routes} history={hashHistory} />
  </Provider>,
  document.getElementById('root')
)
