import React from 'react'
import { Link } from 'react-router-dom'
import zGlogo150px from '../../assets/zGlogo150px.jpg'

import './NavBar.css'
// import ToggleButton from '../mobileNavbar/ToggleButton'



class NavBar extends React.Component {
  constructor(props){
    super()
  }



 render () {






  return (<div>
    <nav id="navbar">
  <Link to="/" className='navbar-logo'><img src={zGlogo150px} alt='logo'/></Link>
  <div className='spacer'/>
  <div className='navbar-words'>
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/original work">original work</Link></li>
      <li><Link to="/prints">prints</Link></li>
      <li><Link to="/clothing">clothing</Link></li>
    </ul>

    </div>
    <div className='mobile-navbar-button'>
    </div>

    </nav>






  </div>);
}
}


export default NavBar;
