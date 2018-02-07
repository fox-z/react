import React from 'react'
import { Navlink } from 'react-router-dom'


export default class App extends React.Component {
  render(){
    return(
      <div className="App">
        { this.props.children }
      </div>
    )
  }
}
