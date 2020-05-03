import { combineReducers } from 'redux';
import breakLength from './breakLength';
import sessionLength from './sessionLength';
import clock from './clock';

export default combineReducers({
  breakLength,
  sessionLength,
  clock,
});
