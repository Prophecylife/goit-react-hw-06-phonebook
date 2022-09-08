import React from 'react';
import PropTypes from 'prop-types';
import s from './contacts.module.css';
import { removeContact } from 'redux/conactSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteContact = () => {
    dispatch(removeContact(id));
  };
  return (
    <li className={s.list} key={id}>
      {name}: {number}
      <button className={s.button} onClick={deleteContact} type="button">
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Contact;
