const SET_USERNAME = 'SET_USERNAME'
const SET_USER_TOKEN = 'SET_USER_TOKEN'

export const setUsername = (username: string) => ({ type: SET_USERNAME, payload: username })
export const setUserToken = (token: string) => ({ type: SET_USER_TOKEN, payload: token })



export const userActions = { SET_USERNAME, SET_USER_TOKEN }

