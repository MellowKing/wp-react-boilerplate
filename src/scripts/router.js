import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Loader from './components/Loader'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Loader} />
      <Route path="*" component={Loader} />
    </Route>
  </Router>
)
