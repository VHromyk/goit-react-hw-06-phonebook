import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import appActions from './app-actions';

const itemsInitionalState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const addContact = createAction(types.ADD_CONTACT);
// const deleteContact = createAction(types.DELETE_CONTACT);

// const items = (state = itemsInitionalState, { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [payload, ...state];

//     case types.DELETE_CONTACT:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//   }

//   return state;
// };

const items = createReducer(itemsInitionalState, {
  [appActions.addContact]: (state, action) => [action.payload, ...state],
  [appActions.deleteContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filter = createReducer('', {
  [appActions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
