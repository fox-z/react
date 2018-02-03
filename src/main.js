import React from 'react'
import ReactDOM from 'react-dom'
import { Router , Route , IndexRoute } from 'react-router-dom'
import App from './App'

import test from './views/test'
const el = document.getElementById('root')

ReactDOM.render(
  <Router history="" pathname="/">
		<Route path="/" component={ App }>
			<IndexRoute path="/test" component={ test } />
		</Route>
		{/*<Route path="/notfind" component={ notFind }/>*/}
	</Router>,
  el
)
