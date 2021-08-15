import React, { useRef } from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ListContact = props => {
  const inputEl = useRef('');
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

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="ui main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search contacts"
            className=""
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="icon search" />
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : 'No Contacts available!'}
      </div>
    </div>
  );
};

export default ListContact;

// Inner style in component or tag in HTML
// style={{color: 'red', marginTop: '10px'}}
