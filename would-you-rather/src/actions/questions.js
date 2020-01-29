import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { handleInitialData } from './shared'

export const ANSWER_QUESTION = 'ANSWER_QUESTION'

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
