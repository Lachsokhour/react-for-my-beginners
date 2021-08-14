import React, { useState } from 'react';
import '../style.css';
import Header from './Header';
import AddContact from './AddContact';
import ListContact from './ListContact';

export default function App() {
  // Using Hook
  const [contacts, setContacts] = useState([]);

  // get data from form create contact
  const addContactHandler = contact => {
    setContacts([...contacts, contact]);
  };
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ListContact contacts={contacts} />
    </div>
  );
}
