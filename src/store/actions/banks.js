import { 
  GET_BANKS,
  GET_BANKS_FAILED, 
  GET_BANKS_LOADING, 
  GET_BANKS_SUCCESS,
} from "../actionTypes"

import axios from '../../axios/axios'

export const handleGetBanksActionCreator = () => dispatch => {
  dispatch({ type: GET_BANKS_LOADING })
  axios.get('/banks/')
    .then(({data}) => {
      console.log(data)
      dispatch({ type: GET_BANKS_SUCCESS})
      let banks = []
      for(let i = 0; i < data.length; i++) {
        switch (data[i].bankId) {
          case '1':
           banks.push('Оптима')
           break
          case '2':
           banks.push('ККБ')
           break
          case '3':
           banks.push('Бакай')
           break
          default:
            console.log(banks)
        }
      }
      dispatch(getBanks(banks))
    })
    .catch((e) => {
      dispatch({ type: GET_BANKS_FAILED })
    })
}

export const getBanks = (banks) => ({
  type: GET_BANKS,
  banks
})

