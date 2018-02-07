import React from 'react'
import { NavLink } from 'react-router-dom'

export default class home extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      msg : 'gourd is cool'
    }
  }
  handleClick(e){
    console.log(e)
    console.log('worinima')  
  }
  render(){
    return(
      <div>
        <NavLink to="test">测试页面,{ this.state.msg }</NavLink>
        <button onClick={ (e) => this.handleClick(e) }>点我试试</button>
      </div>
    )
  }
}