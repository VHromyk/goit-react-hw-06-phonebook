import React from 'react';
import { connect } from 'react-redux';
import appActions from '../../redux/App/app-actions';
import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';

const ContactList = ({ value, changeFilter }) => (
  <label className={styles.label}>
    Find contacts by name:
    <input
      type="text"
      value={value}
      onChange={changeFilter}
      className={styles.input}
    ></input>
  </label>
);

ContactList.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: event =>
    dispatch(appActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
