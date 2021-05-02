import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleProfileActionCreator } from './store/actions/profile';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PrivateRoute from './PrivateRoute/privateRoute'
import './assets/styles/styles.scss';

import MainPage from './pages/MainPage';
import TransactionListPage from './pages/TransactionListPage';
import TransactionAddPage from './pages/TransactionAddPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  const privateRoutes = [
    {path: '/transaction_list', component: <TransactionListPage />},
    {path: '/transaction_add', component: <TransactionAddPage />},
  ]

  const {isLog} = useSelector(state => ({
    isLog: state.profile.isLog,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      dispatch(handleProfileActionCreator())
    }
  }, [isLog])

  return (
    <BrowserRouter basename='/Transaction-app'>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/login' component={LoginPage} exact/>
        {
          privateRoutes.map(route => (
          <PrivateRoute exact path={route.path} key={route.path}>
            {route.component}
          </PrivateRoute>
          ))
        }
      </Switch>
    </BrowserRouter>
  )
}

export default App
