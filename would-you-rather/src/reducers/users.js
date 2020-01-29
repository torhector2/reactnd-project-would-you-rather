import { RECEIVE_DATA } from '../actions/shared'
import { ANSWER_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION:
        const {qid, answer, authedUser } = action
        return {
            ...state,
            [authedUser]: {
                ...state[authedUser],
                answers: {
                    ...state[authedUser].answers,
                    [qid]: answer
                }
            }
        }
        default:
            return state
    }
}
