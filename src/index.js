import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import './fonts/ACaslonProRegular.ttf'
import './fonts/SpringvilleRegular3.ttf'
import './fonts/ACaslonProRegular.woff'
import './fonts/ACaslonProRegular.woff2'
import './fonts/SpringvilleRegular3.woff'
import './fonts/SpringvilleRegular3.woff2'
import './fonts/ACaslonPro-Regular.otf'
import './fonts/Springville-Regular3.otf'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
