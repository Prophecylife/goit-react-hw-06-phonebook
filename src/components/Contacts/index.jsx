import React from 'react';
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

export default Contacts;
