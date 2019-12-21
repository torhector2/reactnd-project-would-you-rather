export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(users) {
    console.log('action receiveUsers')
    console.log(users)
    return {
        type: RECEIVE_USERS,
        users
    }
}