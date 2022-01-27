import React from 'react'
import Hamburger from './Hamburger'
import logo from '.././assets/logo.svg'
import '../stylesheets/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <nav className='navBar'>
        <img src={logo} className='logo' alt='logo' />
        <ul>
          <li>
            <h6>
              <a href='callto:2125555555'>212.555.5555</a>
            </h6>
          </li>
          <li>
            <h6>
              <a href='#'>LOG IN</a>
            </h6>
          </li>
          <li>
            <Hamburger />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
