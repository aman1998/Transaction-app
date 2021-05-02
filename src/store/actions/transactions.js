import axios from "../../axios/axios";
import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_LOADING, 
  GET_TRANSACTIONS_SUCCESS, 
  GET_TRANSACTIONS_FAILED,
  ADD_TRANSACTIONS_LOADING, 
  ADD_TRANSACTIONS_SUCCESS, 
  ADD_TRANSACTIONS_FAILED,
  DELETE_TRANSACTIONS_LOADING, 
  DELETE_TRANSACTIONS_SUCCESS, 
  DELETE_TRANSACTIONS_FAILED,
} from "../actionTypes";

// Список транзакции
export const handleGetTransactionsAcionCreater = () => dispatch => {
  dispatch({type: GET_TRANSACTIONS_LOADING})
  axios.get('/list/')
    .then(({data}) => {
      dispatch(getTransactions(data))
      dispatch({type: GET_TRANSACTIONS_SUCCESS})
      console.log('data', data)
    })
    .catch(e => {
      console.log(e)
      dispatch({type: GET_TRANSACTIONS_FAILED})
    })
  }

// Удаление транзакции
export const handleDeleteTransactionsAcionCreater = (id, setReload) => dispatch => {
  dispatch({type: DELETE_TRANSACTIONS_LOADING})
  axios.delete(`/delete/${id}`)
    .then((res) => {
      setReload(true)
      dispatch({type: DELETE_TRANSACTIONS_SUCCESS})
      console.log(res)
    })
    .catch(e => {
      console.log(e)
      dispatch({type: DELETE_TRANSACTIONS_FAILED})
    })
  }

// Добавление новой транзакции
export const handleAddTransactionsAcionCreater = (select, amount, handleRedirect) => dispatch => {
  let bankId = ''
  switch (select) {
    case 'Оптима':
     bankId = '1'
     break
    case 'ККБ':
     bankId = ('2')
     break
    case 'Бакай':
     bankId = ('3')
     break
    default:
      console.log(bankId)
  }
  dispatch({type: ADD_TRANSACTIONS_LOADING})
  console.log(bankId, amount)
  axios.post(`/add`, {bankId, amount})
    .then((res) => {
      console.log(res)
      dispatch({type: ADD_TRANSACTIONS_SUCCESS})
      alert("Успешно добавлено!")
      handleRedirect()
    })
    .catch(e => {
      console.log(e)
      dispatch({type: ADD_TRANSACTIONS_FAILED})
    })
  }

export const getTransactions = (transactions) => ({
  type: GET_TRANSACTIONS,
  transactions
})

