import React, { Component } from 'react';
import { handleInitialData } from './actions/shared'
import { setAuthedUser } from './actions/authedUser'
import { connect } from 'react-redux';
import SignIn from './components/SignIn'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  signIn = (user = '') => {
    if (user.length === 0) return
    this.props.dispatch(setAuthedUser(user))
  }

  render() {
    const { userIds, users } = this.props
    
    return (
      <SignIn userIds={userIds} users={users} signIn={this.signIn}/>
    );
  }
}

const mapStateToProps = ({users, questions, authedUser}) => (
  {
    userIds: Object.keys(users),
    users,
    questionIds: Object.keys(questions),
    questions,
    authedUser
  }
)

export default connect(mapStateToProps)(App);
