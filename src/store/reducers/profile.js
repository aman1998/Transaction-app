import {
  GET_PROFILE, 
  IS_LOG, 
  GET_PROFILE_SUCCESS, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_FAILED,
  AUTH_PROFILE_SUCCESS, 
  AUTH_PROFILE_LOADING, 
  AUTH_PROFILE_FAILED,
} from "../actionTypes";

const initialState = {
  myProfile: {},
  isLog: false,
  get: {
    success: false,
    loading: false,
    failed: false
  },
  auth: {
    success: false,
    loading: false,
    failed: false
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        myProfile: action.myProfile,
      }
    case IS_LOG:
      return {
        ...state,
        isLog: action.isLog,
      }
    case GET_PROFILE_LOADING:
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false
        },
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        get: {
          success: true,
          loading: false,
          failed: false
        },
      }
    case GET_PROFILE_FAILED:
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true
        },
      }
    case AUTH_PROFILE_LOADING:
      return {
        ...state,
        auth: {
          success: false,
          loading: true,
          failed: false
        },
      }
    case AUTH_PROFILE_SUCCESS:
      return {
        ...state,
        auth: {
          success: true,
          loading: false,
          failed: false
        },
      }
    case AUTH_PROFILE_FAILED:
      return {
        ...state,
        auth: {
          success: false,
          loading: false,
          failed: true
        },
      }
    default: return state
  }
}

export default reducer
