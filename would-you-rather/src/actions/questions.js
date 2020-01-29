import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { handleInitialData } from './shared'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function answerQuestion(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function handleAnswerQuestion(authedUser, qid, answer) {
    return (dispatch, getState) => {
        return _saveQuestionAnswer({authedUser, qid, answer})
            .then(() => {
                dispatch(answerQuestion(authedUser, qid, answer))
            })
    }
}

export function handleNewQuestion(optionOneText, optionTwoText, author) {
    return (dispatch, getState) => {
        return _saveQuestion({optionOneText, optionTwoText, author})
            .then(() => dispatch(handleInitialData()))
    }
}
