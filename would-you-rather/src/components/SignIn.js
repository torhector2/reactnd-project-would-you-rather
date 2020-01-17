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
      <div className="max-w-xl mx-auto text-gray-700">
        <p className="text-center text-3xl">
          Welcome to the Would You Rather App!
        </p>
        <p className="text-center text-2xl">
          Please Sign In to continue
        </p>
        <div>
          <img
            alt="logo"
            className="mt-6 max-w-sm mx-auto h-40 object-center"
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          />
        </div>
        <p className="text-center mt-6 text-3xl text-blue-500">Sign In</p>
        <form onSubmit={this.handleSubmit}>
          <div className="flex mt-6">
            <select name="select" className="w-2/3 ml-30">
              {
                userIds.map(userId => (<option key={userId} value={userId}>{users[userId].name}</option>))
              }
            </select>
            <button className="w-1/3 ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
