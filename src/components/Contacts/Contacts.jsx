import React from 'react';
import Contact from 'components/Contact/Contact';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { removeContact } from 'redux/conactSlice';

const Contacts = () => {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const filteredContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            id={id}
            // deleteContact={removeContact}
          />
        );
      })}
    </ul>
  );
};

export default Contacts;
