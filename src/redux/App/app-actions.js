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

console.log(addContact('Viktor', '5895949494494'));

// const addContact = (name, number) => ({
//   type: types.ADDCONTACT,
//   payload: {
//     id: uuidv4(),
//     name: name,
//     number: number,
//   },
// });

const deleteContact = createAction('app/deleteContact');

// const deleteContact = id => ({
//   type: types.DELETE_CONTACT,
//   payload: id,
// });

const changeFilter = createAction('app/changeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };
