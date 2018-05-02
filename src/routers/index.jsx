
import React from 'react'
import { BrowserRouter, Route , IndexRoute, Redirect } from 'react-router-dom'

import App from '../App'
import Home from '../views/home'
import test from '../views/test'
import notFind from '../views/404'

class Routers extends React.Component {
  constructor(props){
      super(props)
  }
  render (){
    return(
      <BrowserRouter>
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={test} />
          <Redirect path="*" to="/404" component={notFind}/>
        </App>
      </BrowserRouter>
    )
  }
}

export default Routers
