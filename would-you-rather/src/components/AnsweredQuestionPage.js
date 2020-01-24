import React, { Component } from 'react'
import ResultCard from './ResultCard'

class AnsweredQuestionPage extends Component {
    render() {
        const { question, author, optionVoted } = this.props
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes
        return(
            <div>Results:
                <ResultCard optionText={question.optionOne.text} votes={optionOneVotes} totalVotes={totalVotes} voted={optionVoted === 'optionOne'}/>
                <ResultCard optionText={question.optionTwo.text} votes={optionTwoVotes} totalVotes={totalVotes} voted={optionVoted === 'optionTwo'}/>
            </div>
        )
    }
}

export default AnsweredQuestionPage