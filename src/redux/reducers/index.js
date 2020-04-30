import { combineReducers } from 'redux';
import breakLength from './breakLength';
import sessionLength from './sessionLength';

export default combineReducers({
  breakLength,
  sessionLength,
});
