import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import '../style.css';
import Header from './Header';
import AddContact from './AddContact';
import ListContact from './ListContact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  // declare variable into Local Storage
  const LOCAL_STORAGE_KEY = 'contacts';

  // Using the state Hook
  const [contacts, setContacts] = useState([]);

  // get data from form create contact
  const addContactHandler = contact => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = id => {
    const newContactList = contacts.filter(contact => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // Using the effect Hook
  // Get data from localStorage
  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getContacts) setContacts(getContacts);
  }, []);
  // Set data to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <ListContact
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={props => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}
//        NOTED        //
// exact used to solve the problem on route
// Switch used to switch another route to another

// The way that we can pass props into route
// 1 way:
// component={() => (
//   <ListContact
//     contacts={contacts}
//     getContactId={removeContactHandler}
//   />
// )}
// 2 way:
// render={props => (
//   <ListContact
//     {...props}
//     contacts={contacts}
//     getContactId={removeContactHandler}
//   />
// )}
