const SET_USERNAME = 'SET_USERNAME'
const SET_USER_TOKEN = 'SET_USER_TOKEN'
const SET_USER_ID = 'SET_USER_ID'

export const setUsername = (username: string) => ({ type: SET_USERNAME, payload: username })
export const setUserToken = (token: string) => ({ type: SET_USER_TOKEN, payload: token })
export const setUserid = (userid: string) => ({type: SET_USER_ID, payload: userid})

export const userActions = { SET_USERNAME, SET_USER_TOKEN, SET_USER_ID }

