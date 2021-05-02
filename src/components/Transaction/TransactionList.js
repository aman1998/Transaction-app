import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetTransactionsAcionCreater, handleDeleteTransactionsAcionCreater } from '../../store/actions/transactions';

const TransactionList = () => {
  const [reload, setReload] = useState(false)

  const {transactions, get} = useSelector((state) => ({
    transactions: state.transactions.transactions,
    get: state.transactions.get,
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    setReload(false)
    dispatch(handleGetTransactionsAcionCreater())
  }, [reload])

  const handleDeleteTransaction = (e, id) => {
    e.preventDefault()
    dispatch(handleDeleteTransactionsAcionCreater(id, setReload))
  }

  const getBankName = (id) => {
    switch (id) {
      case '1':
       return 'Оптима'
      case '2':
        return 'ККБ'
      case '3':
        return 'Бакай'
      default:
        return 'Ошибка'
    }
  }

  return (
    <section className='transactions__list container'>
      <h1>Список транзакции</h1>
      { get.loading ? <div className='fallback__loading'></div> :
        get.success ?
        (transactions.length > 0 ?
        (
          transactions.map(item => (
            <div key={item.id} className='transaction'>
              <div className='transaction__title'>{getBankName(item.bankId)}</div>
              <div className='transaction__amount'>{item.amount} сомов</div>
              <button onClick={(e) => handleDeleteTransaction(e, item.id)} className='transaction__btn'>Удалить</button>
            </div>
          ))
        ) : <div>Пусто</div>) : <div>Произошла ошибка, перезагрузите страницу</div>
      }
    </section>
  )
}

export default TransactionList
