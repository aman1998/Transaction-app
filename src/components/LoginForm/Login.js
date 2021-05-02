import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoginAction } from '../../store/actions/profile';
import { useHistory } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState('0555822837')
  const [password, setPassword] = useState('123456')
  const [validate, setValidate] = useState(false)

  const {auth, isLog} = useSelector((state) => ({
    auth: state.profile.auth,
    isLog: state.profile.isLog,
  }))

  const dispatch = useDispatch()
  let history = useHistory();

  const handleRedirect = () => {
    history.push('transaction_list');
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if(phone && password) {
      dispatch(handleLoginAction(phone, password, handleRedirect))
    }
    else setValidate(true)
  }

  return (
    <form className='login__form' onSubmit={(e) => handleLogin(e)}>
      {
        isLog ? <div>Вы уже вошли в систему</div> :
        <>
          <h1 className='title'>Войти в систему</h1>
          <input 
            className='input input--1' 
            placeholder='phone' 
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => setValidate(false)}
            value={phone}
            />
          <input 
            className='input' 
            type='password'
            placeholder='password' 
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setValidate(false)}
            value={password}
            />
          {validate && <p className='validate'>Заполните все поля!</p>}
          <button className='btn' type='submit'>
            {auth.loading ? <div className='loading'></div> : 'Войти'}
          </button>
        </>
      }
    </form>
  )
}

export default Login
