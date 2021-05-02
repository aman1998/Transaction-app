import {  GET_TRANSACTIONS,
  GET_TRANSACTIONS_LOADING, 
  GET_TRANSACTIONS_SUCCESS, 
  GET_TRANSACTIONS_FAILED,
  ADD_TRANSACTIONS_LOADING, 
  ADD_TRANSACTIONS_SUCCESS, 
  ADD_TRANSACTIONS_FAILED,
  DELETE_TRANSACTIONS_LOADING, 
  DELETE_TRANSACTIONS_SUCCESS, 
  DELETE_TRANSACTIONS_FAILED,
} from "../actionTypes"

const initialState = {
  transactions: [],
  get: {
    success: false,
    loading: false,
    failed: false,
  },
  add: {
    success: false,
    loading: false,
    failed: false,
  },
  delete: {
    success: false,
    loading: false,
    failed: false,
  },
}

const transactions = (state = initialState, action) => {
switch (action.type) {
  case GET_TRANSACTIONS:
    return {
    ...state,
    transactions: action.transactions,
    }
  case GET_TRANSACTIONS_LOADING:
    return {
      ...state,
      get: {
        success: false,
        loading: true,
        failed: false
      },
  }
  case GET_TRANSACTIONS_SUCCESS:
  return {
    ...state,
    get: {
      success: true,
      loading: false,
      failed: false
    },
  }
  case GET_TRANSACTIONS_FAILED:
    return {
      ...state,
      get: {
        success: false,
        loading: false,
        failed: true
      },
  }
  case ADD_TRANSACTIONS_LOADING:
    return {
      ...state,
      add: {
        success: false,
        loading: true,
        failed: false
      },
  }
  case ADD_TRANSACTIONS_SUCCESS:
    return {
      ...state,
      add: {
        success: true,
        loading: false,
        failed: false
      },
    }
  case ADD_TRANSACTIONS_FAILED:
    return {
      ...state,
      add: {
        success: false,
        loading: false,
        failed: true
      },
  }
  case DELETE_TRANSACTIONS_LOADING:
    return {
      ...state,
      delete: {
        success: false,
        loading: true,
        failed: false
      },
  }
  case DELETE_TRANSACTIONS_SUCCESS:
  return {
    ...state,
    delete: {
      success: true,
      loading: false,
      failed: false
    },
  }
  case DELETE_TRANSACTIONS_FAILED:
    return {
      ...state,
      delete: {
        success: false,
        loading: false,
        failed: true
      },
  }
  default:
    return state
}
}

export default transactions