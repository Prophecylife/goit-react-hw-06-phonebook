import React from 'react';
import { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])
  const [filter, setFilter] = useState('')
  



  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(props, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmitHandler = (...data) => {
    console.log(data);
    this.addContact(data);
  };
  addContact = data => {
    this.setState(prev =>
      prev.contacts.some(
        contact => contact['name'].toLowerCase() === data.name.toLowerCase()
      )
        ? alert(`${data.name} is already in contacts`)
        : { contacts: [...prev.contacts, data] }
    );
  };
  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <Contacts
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
