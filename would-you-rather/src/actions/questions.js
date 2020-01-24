import { _saveQuestionAnswer } from '../utils/_DATA'

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
                console.log('aquí deberíamos dispatch answerQuestion')
                dispatch(answerQuestion(authedUser, qid, answer))
            })
    }
}