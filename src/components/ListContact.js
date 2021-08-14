import React from 'react';
import ContactCard from './ContactCard'

const ListContact = props => {
  const renderContactList = props.contacts.map(contact => {
    return (
      <ContactCard contact={contact}/>
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ListContact;

// Inner style in component or tag in HTML
// style={{color: 'red', marginTop: '10px'}}
