import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveQuestions } from '../actions/questions'

export const RECEIVE_DATA = 'RECEIVE_DATA'

export function receiveData(users, questions) {
    return {
        type: RECEIVE_DATA,
        users,
        questions
    }
}

export function handleInitialData() {
    return async (dispatch) => {
        const users = _getUsers()
        const questions = _getQuestions()
        dispatch(receiveData(await users, await questions))
    }
}
