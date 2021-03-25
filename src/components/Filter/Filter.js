import React from 'react';
import { connect } from 'react-redux';
import appActions from '../../redux/App/app-actions';
import styles from './Filter.module.scss';
import PropTypes from 'prop-types';

const Filter = ({ list, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {list.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <span>{name}</span>
          <span>{number}</span>

          <button
            type="button"
            onClick={() => deleteContact(id)}
            className={styles.button}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

Filter.propTypes = {
  list: PropTypes.array,
  deleteContact: PropTypes.func,
};

const filterContacts = (filter, allContacts) => {
  const normalized = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalized),
  );
};

const mapStateToProps = ({ contacts: { filter, items } }) => ({
  list: filterContacts(filter, items),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(appActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
