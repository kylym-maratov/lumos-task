import {initialState} from "../reducers/user/fetching";

const FETCH_SIGNIN_USER = 'FETCH_SIGNIN_USER'
const FETCH_SIGNUP_USER = 'FETCH_SIGNUP_USER'
const FETCH_USER = 'FETCH_USER'


export const setFetchSigninUser = (data: typeof initialState.fetchSigninUser) => ({ type: FETCH_SIGNIN_USER, payload: data })
export const setFetchSignupUser = (data: typeof initialState.fetchSignupUser) => ({ type: FETCH_SIGNUP_USER, payload: data })
export const setFetchUser = (id: string) => ({type: FETCH_USER, payload: id})

export const userFetchingActions = {
    FETCH_SIGNUP_USER, FETCH_SIGNIN_USER, FETCH_USER
}