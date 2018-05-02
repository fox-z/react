import React from 'react'
import { Link } from 'react-router-dom'

class App extends React.Component {
    render (){
      return (
          <div>
            <Link to='/test'>测试页面</Link><br/>
            <Link to='/'>首页</Link><br/>
            <Link to='/404'>404页面</Link><br/>
              {this.props.children}
          </div>
      )
  }
}

export default App
