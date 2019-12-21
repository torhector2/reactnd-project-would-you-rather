import React, { Component } from 'react';
import { handleUsers } from './actions/shared'
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleUsers())
  }

  render() {
    const { userIds, users } = this.props
    
    return (
      <div>
        App
        <ul>
          {
            userIds.map((userId) => <li key={userId}>{users[userId].name}</li>)
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => (
  {
    userIds: Object.keys(users),
    users
  }
)

export default connect(mapStateToProps)(App);
