export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_QUESTION_FOR_USER = 'ANSWER_QUESTION_FOR_USER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addAnswerToUser(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION_FOR_USER,
        authedUser,
        qid,
        answer
    }
}