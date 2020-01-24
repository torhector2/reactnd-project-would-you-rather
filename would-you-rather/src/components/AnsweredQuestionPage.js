import React, { Component } from 'react'
import ResultCard from './ResultCard'

class AnsweredQuestionPage extends Component {
    render() {
        const { question, author, optionVoted } = this.props
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes
        return(
            <div>
                <div className="ml-8 text-gray-700 text-xl">Asked by {author.name}</div>
                <div className="w-full max-w-full flex mt-8 mb-8 text-gray-900">
                    <div className="ml-4 h-56 w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${author.avatarURL})`}}>
                    </div>
                    <div>
                        <p className="ml-4 text-gray-700 text-4xl">Results:</p>
                        <ResultCard optionText={question.optionOne.text} votes={optionOneVotes} totalVotes={totalVotes} voted={optionVoted === 'optionOne'}/>
                        <ResultCard optionText={question.optionTwo.text} votes={optionTwoVotes} totalVotes={totalVotes} voted={optionVoted === 'optionTwo'}/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default AnsweredQuestionPage