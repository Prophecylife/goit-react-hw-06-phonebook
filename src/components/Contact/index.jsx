import React from 'react';
import PropTypes from 'prop-types';
import s from './contacts.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
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
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default Contact;
