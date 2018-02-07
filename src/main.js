import React from 'react'
import ReactDOM from 'react-dom'
import Routers from './routers/index.jsx'
import store from './store/'
import { Provider } from 'react-redux'
import App from './App'

// 公共样式引入
import './styles/base.scss'

const el = document.getElementById('root')

ReactDOM.render(
	<Provider store={ store }>
		<App>
			<Routers /> 
		</App>
	</Provider>	
	,
  el
)
