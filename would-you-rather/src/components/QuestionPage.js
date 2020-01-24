import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/questions'
import { addAnswerToUser } from '../actions/users'

class QuestionPage extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, authedUser, id } = this.props
        dispatch(handleAnswerQuestion(authedUser, id, e.target.answer.value))
        dispatch(addAnswerToUser(authedUser, id, e.target.answer.value))
    }

    render() {
        const { id, question, author, answered } = this.props
        if (answered) { return  <Redirect to='/' />}
        return(
            <div className="h-56 w-full max-w-full flex mt-8 mb-8 text-gray-900">
                <div className="ml-4 w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${author.avatarURL})`}}>
                </div>
                <form className="mb-8 ml-4" onSubmit={this.handleSubmit}>
                    <div className="font-bold text-xl mb-2">{`${author.name} asks "Would you rather"`}</div>
                    <div>
                        <input type="radio" id="optionOne" value="optionOne" name="answer" className="form-radio h-4 w-4" defaultChecked/>
                        <span className="ml-2">{`...${question.optionOne.text}...`}</span>
                    </div>
                    <div>
                        <input type="radio" id="optionTwo" value="optionTwo" name="answer" className="form-radio h-4 w-4"/>
                        <span className="ml-2">{`...${question.optionTwo.text}...`}</span>
                    </div>
                    <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({questions, users, authedUser}, props) => {
    const { id } = props.match.params

    return {
        id,
        question: questions[id],
        author: users[questions[id].author],
        authedUser,
        users,
        answered: users[authedUser].answers[id]
    }
}

export default connect(mapStateToProps)(QuestionPage)