import React from 'react'
import './App.css'

import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar'
import Header from './components/Header'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const App = () => (
  <div className='container'>
    <Header />
    <Home />
    {/* <Route exact path='/about' component={About}/>
      <Route exact path='/original work' component={Originals}/>
      <Route exact path='/clothing' component={Fabrics}/>
      <Route exact path='/print card' component={PrintCard} />
      <Route exact path='/prints' component={Prints} />

      <Switch>
        <Route exact path='/prints' render={null} />
        <Route exact path='/clothing' render={null} />
        <Route exact path='/about' render={null} />
        <Route exact path='/original work' render={null} />
        <Route exact path='/print card' render={null} />

        <Route component={Home} />
      </Switch> */}
  </div>
)

export default App
