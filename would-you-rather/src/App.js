import React, { Component } from 'react';
import { handleInitialData } from './actions/shared'
import { setAuthedUser } from './actions/authedUser'
import { connect } from 'react-redux';
import SignIn from './components/SignIn'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import QuestionPage from './components/QuestionPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  signIn = (user = '') => {
    if (user.length === 0) return
    this.props.dispatch(setAuthedUser(user))
  }

  render() {
    const { userIds, users, authedUser } = this.props
    return (      
      <Router>
        {authedUser ? (
          <div>
            <Route path='/' exact component={Home} />
            <Route path='/questions/:id' component={QuestionPage} />
            <Route path='/leaderboard' exact component={LeaderBoard} />
          </div>) : (
            <Route path='/' render={() => <SignIn authedUser={authedUser} userIds={userIds} users={users} signIn={this.signIn}/>}/>
          )}
      </Router>
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
