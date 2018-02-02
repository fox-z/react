
import React from 'react'
import { Router , Route , IndexRoute } from 'react-router-dom'

import App from '../../App'k
import test from './views/test'
import notFind from './views/404'

const routerConfig = ( { history } ) => {
  return (
    <Router history={ history }>
      <Route path="/" component={ APP }>
        <IndexRoute path="/test" component={ test } />
      </Route>
      <Route path="/notfind" component={ notFind }/>
    </Router>
  )
}