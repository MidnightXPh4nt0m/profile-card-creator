import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

class Details extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: ''
  }
  handleChange = (e) => {
    const { value, id } = e.target
    this.setState( {[id]: value} )
  }

  render() {
    return (
      <div className="col-4 p-3">
        <h3>Details</h3>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name <span className="text-danger"><b>*</b></span></label>
          <input type="text" className="form-control" id="firstName" value={this.state.firstName} placeholder="John" onChange={this.handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger"><b>*</b></span></label>
          <input type="text" className="form-control" id="lastName" value={this.state.lastName} placeholder="Doe" onChange={this.handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" value={this.state.phoneNumber} placeholder="+000000000000" onChange={this.handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="emailAddress" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="emailAddress" value={this.state.emailAddress} placeholder="johndoe@example.com" onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

const App = () => {
  return (
    <div className="App">
      <Details />
    </div>
  );
}

export default App;
