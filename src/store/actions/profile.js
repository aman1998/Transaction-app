import {
  IS_LOG, 
  GET_PROFILE,
  GET_PROFILE_FAILED, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_SUCCESS,
  AUTH_PROFILE_FAILED, 
  AUTH_PROFILE_LOADING, 
  AUTH_PROFILE_SUCCESS,
} from "../actionTypes"

import axios from '../../axios/axios'

export const handleProfileActionCreator = () => dispatch => {
  dispatch({ type: GET_PROFILE_LOADING })
  const token = localStorage.getItem('token')
  axios.get('/profile/', {
    headers: {
      'Authorization': `${token}`
    }
  })
    .then(({data}) => {
      console.log(data)
      dispatch(getProfile(data))
      dispatch(checkIsLog(true))
      dispatch({ type: GET_PROFILE_SUCCESS})
    })
    .catch((e) => {
      dispatch(checkIsLog(false))
      dispatch({ type: GET_PROFILE_FAILED })
    })
}

export const handleLoginAction = (phone, password, handleRedirect) => (dispatch) => {
  dispatch({ type: AUTH_PROFILE_LOADING })
  axios.post('/login/', {phone, password})
    .then(({data}) => {
      dispatch({ type: AUTH_PROFILE_SUCCESS })
      localStorage.setItem('token', data.user.token)
      dispatch(checkIsLog(true))
      handleRedirect()
    })
    .catch((e) => {
      dispatch({ type: AUTH_PROFILE_FAILED})
    })
}

export const getProfile = (myProfile) => ({
  type: GET_PROFILE,
  myProfile
})


export const checkIsLog = (payload) => ({
  type: IS_LOG,
  isLog: payload
})