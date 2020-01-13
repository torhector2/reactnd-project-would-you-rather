import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

export function handleInitialData() {
    return async (dispatch) => {
        const users = _getUsers()
        const questions = _getQuestions()
        dispatch(receiveUsers(await users))
        dispatch(receiveQuestions(await questions))
    }
}