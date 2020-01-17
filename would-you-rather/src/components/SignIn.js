import React, { Component } from "react";
import serializeForm from "form-serialize"
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    this.props.signIn(values.select)
  };

  render() {
    const { authedUser, userIds, users } = this.props
    if (authedUser) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <span>
          Welcome to the Would You Rather App! Please Sign In to continue
        </span>
        <div>
          <img
            alt="logo"
            style={{ width: "10%" }}
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          />
        </div>
        Sign In
        <form onSubmit={this.handleSubmit}>
          <div>
            <select name="select">
              {
                userIds.map(userId => (<option key={userId} value={userId}>{users[userId].name}</option>))
              }
            </select>
            <button>Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
