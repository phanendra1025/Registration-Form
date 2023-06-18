// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErrorMessage: false,
    lastNameErrorMessage: false,
    registrationSuccesfull: false,
  }

  onSubmitSuccess = () => {
    console.log('success')
  }

  submitAnotherResponse = () => {
    this.setState({registrationSuccesfull: false})
  }

  onSubmitTheForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({firstNameErrorMessage: true, lastNameErrorMessage: true})
    } else if (firstName === '') {
      this.setState({firstNameErrorMessage: true})
    } else if (lastName === '') {
      this.setState({lastNameErrorMessage: true})
    } else {
      this.setState({
        firstNameErrorMessage: false,
        lastNameErrorMessage: false,
        firstName: '',
        lastName: '',
        registrationSuccesfull: true,
      })
      this.onSubmitSuccess()
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  checkTheFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameErrorMessage: true})
    } else {
      this.setState({firstNameErrorMessage: false})
    }
  }

  checkTheLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameErrorMessage: true})
    } else {
      this.setState({lastNameErrorMessage: false})
    }
  }

  render() {
    const {
      firstNameErrorMessage,
      firstName,
      lastName,
      lastNameErrorMessage,
      registrationSuccesfull,
    } = this.state

    const firstNameInputClassName = firstNameErrorMessage
      ? 'error-inputs'
      : 'text-inputs'
    const lastNameInputClassName = lastNameErrorMessage
      ? 'error-inputs'
      : 'text-inputs'

    return (
      <div className="registration-form-container">
        <h1 className="app-name">Registration</h1>
        <div className="container">
          {!registrationSuccesfull ? (
            <form className="form-container" onSubmit={this.onSubmitTheForm}>
              <div className="first-name-container">
                <label htmlFor="firstName" className="labels">
                  FIRST NAME
                </label>
                <br />
                <input
                  onBlur={this.checkTheFirstName}
                  type="text"
                  className={firstNameInputClassName}
                  placeholder="First name"
                  value={firstName}
                  onChange={this.onChangeFirstName}
                  id="firstName"
                />
                {firstNameErrorMessage && (
                  <p className="error-message">*Required</p>
                )}
                <br />
              </div>
              <div className="last-name-container">
                <label htmlFor="lastName" className="labels">
                  LAST NAME
                </label>
                <br />
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className={lastNameInputClassName}
                  onChange={this.onChangeLastName}
                  onBlur={this.checkTheLastName}
                  value={lastName}
                />
                <br />
                {lastNameErrorMessage && (
                  <p className="error-message">*Required</p>
                )}
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          ) : (
            <div className="success-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-image"
              />
              <p>Submitted Successfully</p>
              <button
                className="another-response-button"
                onClick={this.submitAnotherResponse}
                type="submit"
              >
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
