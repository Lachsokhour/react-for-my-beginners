import React from 'react';
import { Link } from 'react-router-dom';

class EditContact extends React.Component {
  // init for state
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = { id, name, email };
  }

  update = e => {
    e.preventDefault();
    // Check all fields are invalid or not
    if (this.state.name === '' || this.state.email === '') {
      alert('All fields are required!');
      return;
    }
    // add data to list
    this.props.updateContactHandler(this.state);
    // navigate to list contacts
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <button className="ui button blue">Update</button>
            <Link to="/">
              <button className="ui button red">Back</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default EditContact;
