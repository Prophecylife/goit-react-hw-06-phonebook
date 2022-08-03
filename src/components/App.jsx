import React from 'react';
import { useState } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
// import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(props, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const formSubmitHandler = data => {
    addContact(data);
  };
  const addContact = data => {
    setContacts(prev =>
      prev.some(
        contact => contact['name'].toLowerCase() === data.name.toLowerCase()
      )
        ? alert(`${data.name} is already in contacts`)
        : { contacts: [...prev, data] }
    );
  };
  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <Filter value={filter} onChange={changeFilter} />
      <h2>Contacts</h2>
      <Contacts contacts={getVisibleContacts()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
