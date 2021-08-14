import React, { useState, useEffect } from 'react';
import '../style.css';
import Header from './Header';
import AddContact from './AddContact';
import ListContact from './ListContact';

export default function App() {
  // declare variable into Local Storage
  const LOCAL_STORAGE_KEY = 'contacts';

  // Using the state Hook
  const [contacts, setContacts] = useState([]);

  // Using the effect Hook
  useState(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, contacts);
  }, [contacts]);

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
