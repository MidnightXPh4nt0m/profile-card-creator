import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.slim'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

class Details extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    displays: {
      displayPhoneNumber: false,
      displayEmailAddress: false
    },
    cardHeight: '3',
    cardWidth: '6',
    cardSizeUnit: 'cm'
  }
  handleChange = (e) => {
    const { id, value, type, checked } = e.target

    if (type === 'checkbox') {
      this.setState({
        displays: { ...this.state.displays, [id]: checked },
      })
    } else {
      this.setState({ [id]: value })
    }
  }
  options = [
    {
      value: 'cm',
      label: 'cm',
    },
    {
      value: 'mm',
      label: 'mm',
    },
    {
      value: 'in',
      label: 'in',
    },
    {
      value: 'px',
      label: 'px',
    },
    {
      value: 'pt',
      label: 'pt',
    },
    {
      value: 'pc',
      label: 'pc',
    },
  ]
  selectOptions = this.options.map(({ id, value, label }) => (
    <option key={label} value={value}>{label}</option>
  ))

  render() {
    return (
      <div className="App-sub-division col-12 d-flex flex-column-reverse flex-md-row justify-content-around">
        <div className="col-12 col-sm-12 col-md-6 col-xl-4 xxl-5 p-3">
          <div className="Details col-12 p-3">
            <h3>Details</h3>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="firstName" value={this.state.firstName} placeholder="John" onChange={this.handleChange} />
              <label htmlFor="firstName" className="form-label">First Name <span className="text-danger"><b>*</b></span></label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="displayFirstName" checked disabled />
                <label className="form-check-label" htmlFor="displayFirstName">
                  Display
                </label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="lastName" value={this.state.lastName} placeholder="Doe" onChange={this.handleChange} />
              <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger"><b>*</b></span></label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="displayLastName" checked disabled />
                <label className="form-check-label" htmlFor="displayLastName">
                  Display
                </label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="tel" className="form-control" id="phoneNumber" value={this.state.phoneNumber} placeholder="+000000000000" onChange={this.handleChange} />
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="displayPhoneNumber" onChange={this.handleChange} />
                <label className="form-check-label" htmlFor="displayPhoneNumber">
                  Display
                </label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="emailAddress" value={this.state.emailAddress} placeholder="johndoe@example.com" onChange={this.handleChange} />
              <label htmlFor="emailAddress" className="form-label">Email Address</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="displayEmailAddress" onChange={this.handleChange} />
                <label className="form-check-label" htmlFor="displayEmailAddress">
                  Display
                </label>
              </div>
            </div>
          </div>
          <div className="Control col-12 p-3">
            <h2>Control</h2>
            <div className="row mb-3">
              <label className="mb-2">Card Size (width x height - unit)</label>
              <div className="col-3 col-md-3">
                <input type="number" className="form-control" id="cardWidth" value={this.state.cardWidth} placeholder="6" onChange={this.handleChange} />
              </div>
              <div className="col-3 col-md-3">
                <input type="number" className="form-control" id="cardHeight" value={this.state.cardHeight} placeholder="3" onChange={this.handleChange} />
              </div>
              <div className="col-6 col-md-4">
                <select id="cardSizeUnit" className="form-select" aria-label="Default select example" onChange={this.handleChange}>
                  {this.selectOptions}
                </select>
              </div>
            </div>
          </div>
        </div>
        <Preview cardWidth={this.state.cardWidth} cardHeight={this.state.cardHeight} cardSizeUnit={this.state.cardSizeUnit} firstName={this.state.firstName} lastName={this.state.lastName} phoneNumber={this.state.phoneNumber} emailAddress={this.state.emailAddress} displayEmailAddress={this.state.displays.displayEmailAddress} displayPhoneNumber={this.state.displays.displayPhoneNumber} />
      </div>
    )
  }
}

const Preview = (props) => {
  let firstName = props.firstName
  let lastName = props.lastName
  let phoneNumber, emailAddress
  let displayEmailAddress = props.displayEmailAddress
  let displayPhoneNumber = props.displayPhoneNumber

  if (firstName === '' && lastName === '') {
    firstName = 'John'
    lastName = 'Doe'
  }
  if (displayPhoneNumber) {
    phoneNumber = `Tel: ${props.phoneNumber}`
  }
  if (displayEmailAddress) {
    emailAddress = `Mail: ${props.emailAddress}`
  }

  return (
    <div className="Preview col-12 col-sm-12 col-md-6 col-lg-5 col-xl-7 col-xxl-7 p-3 d-flex flex-column align-items-center">
      <h2>Preview</h2>
      <div className="col-12 d-flex flex-column align-items-center">
        <div style={{ width: `${props.cardWidth}${props.cardSizeUnit}`, height: `${props.cardHeight}${props.cardSizeUnit}` }} className="card border border-2 border-secondary d-flex flex-column justify-content-around p-2">
          <h5>{firstName} {lastName}</h5>
          <div className="col-12 d-flex flex-column justify-content-evenly">
            <span>{phoneNumber}</span>
            <span>{emailAddress}</span>
          </div>
        </div>
        <span className="text-muted fw-light">{props.cardWidth}x{props.cardHeight} ({props.cardSizeUnit})</span>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="App col-12">
      <Details />
    </div>
  );
}

export default App;
