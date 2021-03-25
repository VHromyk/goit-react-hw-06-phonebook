import React, { Component } from 'react';
import { ReactReduxContext } from 'react-redux';
import styles from './ContactForm.module.scss';
import { connect } from 'react-redux';
import appActions from '../../redux/App/app-actions';
import contactFormActions from '../../redux/ContactForm/contactForm-actions';

const ContactForm = ({
  name,
  number,
  onChangeInputName,
  onChangeInputNumber,
  onSubmitForm,
}) => (
  <form className={styles.form} onSubmit={onSubmitForm}>
    <label className={styles.label}>
      Name
      <input
        className={styles.input}
        name="name"
        value={name}
        onChange={onChangeInputName}
      ></input>
    </label>
    <label className={styles.label}>
      Number
      <input
        className={styles.input}
        name="number"
        value={number}
        onChange={onChangeInputNumber}
      ></input>
    </label>
    <button className={styles.button} type="submit">
      Add contact
    </button>
  </form>
);

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   onChangeInput = event => {
//     this.setState({
//       [event.currentTarget.name]: event.currentTarget.value,
//     });
//   };

//   onSubmitForm = event => {
//     const { name, number } = this.state;
//     const { contacts, addContact } = this.props;
//     event.preventDefault();

//     const findContact = contacts.find(contact => contact.name === name);
//     if (findContact) {
//       alert(`${name} is already in the contact`);
//     } else if (number.length !== 0) {
//       addContact(name, number);
//       this.onResetForm();
//     }
//   };

//   onResetForm = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form className={styles.form} onSubmit={this.onSubmitForm}>
//         <label className={styles.label}>
//           Name
//           <input
//             className={styles.input}
//             name="name"
//             value={this.state.name}
//             onChange={this.onChangeInput}
//           ></input>
//         </label>
//         <label className={styles.label}>
//           Number
//           <input
//             className={styles.input}
//             name="number"
//             value={this.state.number}
//             onChange={this.onChangeInput}
//           ></input>
//         </label>
//         <button className={styles.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

const mapStateToProps = state => ({
  name: state.phoneNumber.name,
  number: state.phoneNumber.number,
});

const mapDispatchToProps = dispatch => ({
  onChangeInputName: event =>
    dispatch(contactFormActions.changeInputName(event.currentTarget.value)),
  onChangeInputNumber: event =>
    dispatch(contactFormActions.changeInputNumber(event.currentTarget.value)),
  onSubmitForm: (name, number) => dispatch(appActions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
