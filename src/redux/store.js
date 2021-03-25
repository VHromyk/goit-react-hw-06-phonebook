import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './reducer';

const middleWare = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleWare,
});

export default store;
