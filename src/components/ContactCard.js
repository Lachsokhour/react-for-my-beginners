import React from 'react';
import { Link } from 'react-router-dom';

const ContactCard = props => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header"> {name}</div>
          <div> {email}</div>
        </Link>
      </div>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i
          onClick={() => props.clickHandler(id)}
          className="edit alternate outline icon"
          style={{ color: 'green', marginTop: '10px', marginRight: '10px' }}
        />
      </Link>
      <i
        onClick={() => props.clickHandler(id)}
        className="trash alternate outline icon"
        style={{ color: 'red', marginTop: '10px' }}
      />
    </div>
  );
};

export default ContactCard;
