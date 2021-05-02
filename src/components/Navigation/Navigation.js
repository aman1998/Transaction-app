import React from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkIsLog } from '../../store/actions/profile';

import UserIcon from '../../assets/images/user.png';

const Navigation = () => {
  const dispatch = useDispatch()
  let history = useHistory();

  const handleLogout = () => {
   localStorage.removeItem('token')
   dispatch(checkIsLog(false))
   history.push('');
  }

  return (
    <nav className='profile-navigation'>
      <img src={UserIcon} alt='user' className='user-icon'/>
      <div className='dropdown'>
        <div className='dropdown-item'> 
          <NavLink to='/transaction_add' className='dropdown-item' exact>Transaction_add</NavLink>
        </div>
        <div className='dropdown-item'> 
          <NavLink to='/transaction_list' className='dropdown-item' exact>Transaction_list</NavLink>
        </div>
        <div className='dropdown-item'> 
          <button onClick={handleLogout} className='dropdown-item btn'>Log Out</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
