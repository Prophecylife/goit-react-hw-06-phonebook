import React from 'react';
import PropTypes from 'prop-types';
import s from './contacts.module.css';

const Contacts = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li className={s.list} key={id}>
          {name}: {number}
          <button
            className={s.button}
            onClick={() => deleteContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
