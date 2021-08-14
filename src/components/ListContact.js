import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ListContact = props => {
  const deleteContactHandler = id => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map(contact => {
    return (
      <div>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      </div>
    );
  });
  return (
    <div className="ui main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ListContact;

// Inner style in component or tag in HTML
// style={{color: 'red', marginTop: '10px'}}
