import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReducer, createAction } from '@reduxjs/toolkit';
import submitActions from './contactForm-actions';

const name = createReducer('', {
  [submitActions.changeInputName]: (_, action) => action.payload,
});

const number = createReducer('', {
  [submitActions.changeInputNumber]: (_, action) => action.payload,
});

export default combineReducers({
  name,
  number,
});
