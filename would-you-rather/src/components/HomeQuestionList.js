import React, { Component } from 'react'
import HomeQuestionCard from './HomeQuestionCard'

class HomeQuestionList extends Component {
    render() {
        const {id, questionsIds} = this.props
        return(
            <ul id={id}>
                {
                    questionsIds.map(questionId => (
                        <HomeQuestionCard key={questionId} questionId={questionId}/>
                    ))
                }
            </ul> 
        )
    }
}

export default HomeQuestionList