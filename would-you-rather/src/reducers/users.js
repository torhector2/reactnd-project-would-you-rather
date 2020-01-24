import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION_FOR_USER } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION_FOR_USER:
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