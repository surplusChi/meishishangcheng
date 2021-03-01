import ReactDom from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter as Router} from 'react-router-dom'

import App from './App'
import './assets/styles/reset.css' // 导入全局样式

ReactDom.render(
  <Router>
    <Provider store={store}>
      <App></App>
    </Provider>
  </Router>,
  document.querySelector('#root')
)