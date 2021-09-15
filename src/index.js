import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import App from './App'
import './fonts/ACaslonPro-Regular.otf'
import './fonts/Springville-Regular3.otf'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
