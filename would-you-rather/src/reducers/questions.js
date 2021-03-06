import { RECEIVE_DATA } from '../actions/shared'
import { ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            const {qid, answer, authedUser } = action
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}
