import React from 'react';
import { Link } from 'react-router-dom';

const ContactDetail = props => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="ui main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <Link to="/">
        <button className="ui button red">Back</button>
      </Link>
    </div>
  );
};

export default ContactDetail;
