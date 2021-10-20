import React from 'react'
import './styles/Header.css'
import logo from './assets/privylogo.png'

class Header extends React.Component {
    render () {
      return <div className='header'>
        <img src={logo} alt=''/>
        <h1 className='title'>Welcome to Privy</h1>
        <h3>Your SMS Marketing Dashboard</h3>
      </div>
    }
  }



  export default Header