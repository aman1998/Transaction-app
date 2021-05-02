import {
  GET_BANKS, 
  GET_BANKS_SUCCESS, 
  GET_BANKS_LOADING, 
  GET_BANKS_FAILED,
} from "../actionTypes";

const initialState = {
  banks: [],
  get: {
    success: false,
    loading: false,
    failed: false
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANKS:
      return {
        ...state,
        banks: action.banks,
      }
    case GET_BANKS_LOADING:
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false
        },
      }
    case GET_BANKS_SUCCESS:
      return {
        ...state,
        get: {
          success: true,
          loading: false,
          failed: false
        },
      }
    case GET_BANKS_FAILED:
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true
        },
      }
    default: return state
  }
}

export default reducer
