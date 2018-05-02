import React from 'react'

class notFind extends React.Component {
  constructor (props, context) {
    super (props, context)
    this.state = {
      msg: '错误信息'
    }
  }
  render(){
    return(
      <div>404 页面</div>
    )
  }
  componentWillMount(){
      console.log('将要挂在页面')
  }
  componentDidMount () {
    console.log(this.props.history.push('/test'))
    setTimeout( () => {
        this.setState({
            msg: '修改后的错误信息'
        })
    }, 2000)
  }
}
export default notFind