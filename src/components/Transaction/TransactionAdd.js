import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetBanksActionCreator } from '../../store/actions/banks';
import { handleAddTransactionsAcionCreater } from '../../store/actions/transactions';
import { useHistory } from "react-router-dom"

const TransactionAdd = () => {
  const [select, setSelect] = useState('')
  const [amount, setAmount] = useState('')
  const [validate, setValidate] = useState(false)

  const {banks, get} = useSelector((state) => ({
    banks: state.banks.banks,
    get: state.banks.get,
  }))
  const dispatch = useDispatch()
  let history = useHistory();

  useEffect(() => {
    dispatch(handleGetBanksActionCreator())
  }, [])

  const handleRedirect = () => {
    history.push('transaction_list');
  }

  const handleAddTransaction = (e) => {
    e.preventDefault()
    if(select && amount) {
      dispatch(handleAddTransactionsAcionCreater(select, amount, handleRedirect))
    }
    else setValidate(true)
  }

  return (
    <form className='transaction__add container' onSubmit={(e) => handleAddTransaction(e)}>
      <h1>Добавить новую транзакцию</h1>
      <select 
        defaultValue={select} 
        name='banks' 
        className='select' 
        onChange={(e) => setSelect(e.target.value)} 
        onFocus={() => setValidate(false)}
      >
        <option value=''>Не выбрано</option>
        { get.loading ? <option value='Загрузка'>Загрузка</option> :
          get.success ?
          banks.map((item) => (
            <option value={item} key={item}>{item}</option>
          )) : null
        }
      </select>
      <input 
        placeholder='Сумма' 
        type='number' 
        className='input' 
        onChange={(e) => setAmount(e.target.value)}
        onFocus={() => setValidate(false)}
      />
      {validate && <div className='validate'>Заполните все поля!</div>}
      <button type='submit' className='btn'>Добавить</button>
    </form>
  )
}

export default TransactionAdd
