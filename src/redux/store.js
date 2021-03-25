import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

console.log(getDefaultMiddleware());

const middleWare = [...getDefaultMiddleware(), logger];

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleWare,
});

export default store;
