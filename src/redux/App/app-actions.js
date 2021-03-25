import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('app/addContact', (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('app/deleteContact');

const changeFilter = createAction('app/changeFilter');

export default { addContact, deleteContact, changeFilter };
