import React from 'react';

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>

          <div className="field">
            <label htmlFor="">Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div>
            <button className="ui button blue">Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
