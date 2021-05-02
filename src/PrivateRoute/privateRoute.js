import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children,...rest}) => {

  const {isLog, failed } = useSelector(state => ({
    isLog: state.profile.isLog,
    failed: state.profile.get.failed,
  }))

    return (<Route {...rest} render={()=> (
      isLog ? (children) : failed ? (<Redirect to={'/'}/>) : null
      )}/>);
}

export default PrivateRoute;