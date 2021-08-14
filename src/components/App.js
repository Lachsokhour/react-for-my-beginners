import React from 'react';
import '../style.css';
import Header from './Header';
import AddContact from './AddContact';
import ListContact from './ListContact';

export default function App() {
  const listContacts = [
    { id: '1', name: 'sokhour', email: 'sokhour@gmail.com' },
    { id: '2', name: 'sokhour', email: 'sokhour@gmail.com' },
    { id: '3', name: 'sokhour', email: 'sokhour@gmail.com' },
    { id: '4', name: 'sokhour', email: 'sokhour@gmail.com' },
    { id: '5', name: 'sokhour', email: 'sokhour@gmail.com' },
    { id: '6', name: 'sokhour', email: 'sokhour@gmail.com' },
    { id: '7', name: 'sokhour', email: 'sokhour@gmail.com' },
    { id: '8', name: 'sokhour', email: 'sokhour@gmail.com' },
    { id: '9', name: 'sokhour', email: 'sokhour@gmail.com' }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ListContact contacts={listContacts} />
    </div>
  );
}
