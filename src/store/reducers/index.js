import { combineReducers } from 'redux';
import transactions from './transactions';
import profile from './profile';
import banks from './banks';

export default combineReducers({
  transactions, profile, banks
})