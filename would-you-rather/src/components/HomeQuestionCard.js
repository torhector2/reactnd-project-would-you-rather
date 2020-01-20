import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class HomeQuestionCard extends Component {
    render() {
        const {question, user} = this.props

        return(
            <li key={question.id}>
                <div className="h-56 w-full max-w-full flex mt-8 mb-8">
                    <div className="ml-4 w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${user.avatarURL})`}}>
                    </div>
                    <div className="mb-8 ml-4">
                        <div className="text-gray-900 font-bold text-xl mb-2">{`${user.name} asks "Would you rather"`}</div>
                        <p className="text-gray-700 text-base">{`...${question.optionOne.text}...`}</p>
                        <Link to={`/questions/${question.id}`}>
                            <div className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Poll</div>
                        </Link>
                    </div>
                </div>
            </li>
        )
    }
}

const mapStateToProps = ({questions, users}, {questionId, userId}) => ({
    question: questions[questionId],
    user: users[questions[questionId].author]
})

export default connect(mapStateToProps)(HomeQuestionCard)