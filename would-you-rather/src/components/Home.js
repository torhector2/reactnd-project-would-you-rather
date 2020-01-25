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
        const selectedStyle = "text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
        const unselectedStyle = "text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
        
        const unansweredStyle = this.state.selected === 'unanswered' ? selectedStyle : unselectedStyle
        const answeredStyle = this.state.selected === 'answered' ? selectedStyle : unselectedStyle
        
        return(
            <div>
                <ul id="tabs" className="flex">
                    <li className="flex-1 mr-2">
                        <a className={unansweredStyle} href="#" onClick={() => this.selectTab('unanswered')}>Unaswered Questions</a>
                    </li>
                    <li className="flex-1 mr-2">
                        <a className={answeredStyle} href="#" onClick={() => this.selectTab('answered')}>Answered Questions</a>
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
    })
    const unansweredQuestionsIds = questionIds.filter((id) => !answeredQuestionsIds.includes(id))
    return {
        questionIds,
        answeredQuestionsIds,
        unansweredQuestionsIds
    }
}

export default connect(mapStateToProps)(Home)