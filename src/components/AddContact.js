import React from 'react';

class AddContact extends React.Component {
  // init for state
  state = {
    name: '',
    email: ''
  };

  add = e => {
    e.preventDefault();
    // Check all fields are invalid or not
    if (this.state.name === '' || this.state.email === '') {
      alert('All fields are required!');
    }
    // add data to list
    this.props.addContactHandler(this.state);
    this.setState({ name: '', email: '' });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
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
            <button className="ui button blue">Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
