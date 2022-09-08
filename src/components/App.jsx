import React from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <h2>Contacts</h2>
      <Contacts />
    </div>
  );
};

export default App;
