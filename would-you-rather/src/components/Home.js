import React, { Component } from "react"
import { connect } from 'react-redux'
import HomeQuestionList from './HomeQuestionList'

class Home extends Component {
    state = {
        selected: 'unanswered'
    }

    selectTab(tab) {
        this.setState({selected: tab})
    }

    render() {
        const selectedStyle = "w-full text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
        const unselectedStyle = "w-full text-center block border border-blue rounded hover:border-gray-200 text-blue-500 bg-gray-100 hover:bg-gray-200 py-2 px-4"
        
        const unansweredStyle = this.state.selected === 'unanswered' ? selectedStyle : unselectedStyle
        const answeredStyle = this.state.selected === 'answered' ? selectedStyle : unselectedStyle
        
        return(
            <div>
                <ul id="tabs" className="flex">
                    <li className="flex-1 mr-2">
                        <button className={unansweredStyle} onClick={() => this.selectTab('unanswered')}>Unaswered Questions</button>
                    </li>
                    <li className="flex-1 mr-2">
                        <button className={answeredStyle} onClick={() => this.selectTab('answered')}>Answered Questions</button>
                    </li>
                </ul>
                
                {(this.state.selected === "unanswered" ? 
                    <HomeQuestionList id="unanswered" questionsIds={this.props.unansweredQuestionsIds} />
                : 
                    <HomeQuestionList id="answered" questionsIds={this.props.answeredQuestionsIds} />
                )}
            </div>
        )
    }
}

const mapStateToProps = ({questions, authedUser}) => {
    const questionIds = Object.keys(questions)
    const answeredQuestionsIds = questionIds.filter((id) => {
        const question = questions[id]
        return question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    }).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    const unansweredQuestionsIds = questionIds.filter((id) => !answeredQuestionsIds.includes(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        questionIds,
        answeredQuestionsIds,
        unansweredQuestionsIds
    }
}

export default connect(mapStateToProps)(Home)