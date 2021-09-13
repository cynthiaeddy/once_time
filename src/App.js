import React from 'react'
import './App.css'

import Home from './components/home/Home'
import Header from './components/Header'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const App = () => (
  <div id='container'>
    <Header />
    <Home />
  </div>
)

export default App
