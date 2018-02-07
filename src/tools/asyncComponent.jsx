import React , { Component } from 'react'

export default function asyncComponent( importComponent ){
  class AsyncComponent extends Component {
    constructor( props ){
      super( props ) ;
      this.state = {
        component : null 
      }
    }

    async componentDidMount(){
      const { default : component } = await importComponent();
      this.setState( { component } );
    }

    render(){
      const comp = this.state.component ;
      return comp ? <comp { ...this.props } /> : null
    }
  }

  return AsyncComponent ;
}