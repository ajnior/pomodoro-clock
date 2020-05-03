import { combineReducers } from 'redux';
import breakLength from './breakLength';
import sessionLength from './sessionLength';
import timer from './timer';

export default combineReducers({
  breakLength,
  sessionLength,
  timer,
});
