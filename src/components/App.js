import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import uuid from 'react-uuid';
import '../style.css';
import Header from './Header';
import AddContact from './AddContact';
import ListContact from './ListContact';
import ContactDetail from './ContactDetail';
import api from '../api/contacts';
import EditContact from './EditContact';

export default function App() {
  // declare variable into Local Storage
  const LOCAL_STORAGE_KEY = 'contacts';

  // Using the state Hook
  const [contacts, setContacts] = useState([]);

  // get data from form create contact
  const addContactHandler = async contact => {
    // request contact to api
    const request = {
      id: uuid(),
      ...contact
    };

    const response = await api.post('/contacts', request);
    setContacts([...contacts, response.data]);
  };

  // delete item of contacts
  const removeContactHandler = async id => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter(contact => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // Update contact ( function update is not working, it have error on backend)
  const updateContactHandler = async contact => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    setContacts(
      contacts.map(contact => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  // Get data from api
  const getContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  };

  // Using the effect Hook
  // Get data from localStorage
  useEffect(() => {
    // const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (getContacts) setContacts(getContacts);

    const getAllContacts = async () => {
      const allContacts = await getContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);
  // Set data to localStorage
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        {/*  Implement Route */}
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
          {/* Route Create */}
          <Route
            path="/add"
            render={props => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />

          {/* Route view detail */}
          <Route
            path="/contact/:id"
            render={props => <ContactDetail {...props} />}
          />

          {/* Route Edit */}
          <Route
            path="/edit"
            render={props => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
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
