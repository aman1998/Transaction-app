import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Nav from '../Navigation/Navigation';
import Logo from '../../assets/images/logo.png';


const Header = () => {
  const {isLog } = useSelector(state => ({
    isLog: state.profile.isLog,
  }))

  return (
    <header className='header'>
      <div className='container'>
      <NavLink to='/' exact><img src={Logo} alt='logo'/></NavLink>
        {
          isLog ? <Nav /> : <div className='btn'><NavLink to='/login' exact>Login</NavLink></div>
        }
      </div>
    </header>
  )
}

export default Header