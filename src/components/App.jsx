import React from 'react';
import { useState } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filtered, setFiltered] = useState('');

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

  const addContact = newContact => {
    setContacts(prev =>
      prev.some(
        contact =>
          contact['name'].toLowerCase() === newContact.name.toLowerCase()
      )
        ? alert(`${newContact.name} is already in contacts`)
        : [...prev, newContact]
    );
  };
  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };
  const changeFilter = e => {
    setFiltered(e.currentTarget.value);
  };
  const getVisibleContacts = () => {
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <Filter value={filtered} onChange={changeFilter} />
      <h2>Contacts</h2>
      <Contacts contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
