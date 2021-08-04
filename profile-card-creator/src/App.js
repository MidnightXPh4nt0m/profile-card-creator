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
    this.setState({ [id]: value })
  }

  render() {
    return (
      <div className="Details col-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 xxl-4 p-3">
        <h3>Details</h3>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="firstName" value={this.state.firstName} placeholder="John" onChange={this.handleChange} />
          <label htmlFor="firstName" className="form-label">First Name <span className="text-danger"><b>*</b></span></label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="displayFirstName" checked disabled />
            <label className="form-check-label" htmlFor="displayFirstName">
              Display
            </label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="lastName" value={this.state.lastName} placeholder="Doe" onChange={this.handleChange} />
          <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger"><b>*</b></span></label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="displayLastName" checked disabled />
            <label className="form-check-label" htmlFor="displayLastName">
              Display
            </label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="phoneNumber" value={this.state.phoneNumber} placeholder="+000000000000" onChange={this.handleChange} />
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="displayPhoneNumber" />
            <label className="form-check-label" htmlFor="displayPhoneNumber">
              Display
            </label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="emailAddress" value={this.state.emailAddress} placeholder="johndoe@example.com" onChange={this.handleChange} />
          <label htmlFor="emailAddress" className="form-label">Email Address</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="displayEmailAddress" />
            <label className="form-check-label" htmlFor="displayEmailAddress">
              Display
            </label>
          </div>
        </div>
      </div>
    )
  }
}

// TODO Create Preview component props and get data from Details compoent
const Preview = (props) => {
  return (
    <div className="Preview col-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 col-xxl-8 p-3 d-flex flex-column align-items-center">
      <h2>Preview</h2>
      <div>
        <div style={{width: `${props.cardWidth}${props.cardSizeUnit}`, height: `${props.cardHight}${props.cardSizeUnit}`}} className="card border border-2 border-secondary">
          {/* REVIEW Card content is going to be here  */}
        </div>
        <span className="text-muted fw-light">6x3 (cm)</span>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="App col-12 d-flex flex-column-reverse flex-md-row justify-content-around">
      <Details />
      <Preview cardWidth="6" cardHight="3" cardSizeUnit="cm" />
    </div>
  );
}

export default App;
