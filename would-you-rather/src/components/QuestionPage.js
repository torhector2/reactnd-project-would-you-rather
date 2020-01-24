import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/questions'
import { addAnswerToUser } from '../actions/users'
import UnansweredQuestionPage from './UnansweredQuestionPage'
import AnsweredQuestionPage from './AnsweredQuestionPage'

class QuestionPage extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, authedUser, id } = this.props
        dispatch(handleAnswerQuestion(authedUser, id, e.target.answer.value))
        dispatch(addAnswerToUser(authedUser, id, e.target.answer.value))
    }

    render() {
        const { question, author, answered, optionVoted } = this.props
        if (answered) {
            return <AnsweredQuestionPage question={question} author={author} optionVoted={optionVoted} />
        }
        return <UnansweredQuestionPage question={question} author={author} handleSubmit={this.handleSubmit} />
    }
}

const mapStateToProps = ({questions, users, authedUser}, props) => {
    const { id } = props.match.params
    const optionVoted = questions[id].optionOne.votes.includes(authedUser) ? 'optionOne' : 'optionTwo'

    return {
        id,
        question: questions[id],
        author: users[questions[id].author],
        authedUser,
        users,
        answered: users[authedUser].answers[id],
        optionVoted
    }
}

export default connect(mapStateToProps)(QuestionPage)