import { _getUsers } from '../utils/_DATA'
import { receiveUsers } from '../actions/users'

export function handleUsers() {
    return async (dispatch) => {
        const users = await _getUsers()
        dispatch(receiveUsers(users))
    }
}