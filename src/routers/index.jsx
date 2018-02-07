import React , { Component } from 'react'
import { Router , HashRouter , Switch , Route , Redirect , IndexRoute } from 'react-router-dom'
// import AsyncComponent from '../tools/asyncComponent.jsx';
import App from '../App'
import home from '../views/home/'
import test from '../views/test/'
import NotFind from '../views/404/'

export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ home } />
          <Route path="/home" component={ home } />
          <Route path="/test" component={ test } />
          <Route path="*" component={ NotFind } />
        </Switch>
      </HashRouter>
    )
  }
}