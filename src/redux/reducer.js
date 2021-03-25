import { combineReducers } from 'redux';
import contactsReducer from './App/app-reducer';
import contactFormReducer from './ContactForm/contactForm-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  phoneNumber: contactFormReducer,
});

export default rootReducer;
