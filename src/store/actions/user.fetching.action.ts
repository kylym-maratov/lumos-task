import {initialStateUserFetching} from "../reducers/user/fetching";

const FETCH_SIGNIN_USER = 'FETCH_SIGNIN_USER'
const FETCH_SIGNUP_USER = 'FETCH_SIGNUP_USER'
const FETCH_USER = 'FETCH_USER'
const FETCH_USERINFO = 'FETCH_USERINFO'

export const setFetchSigninUser = (data: typeof initialStateUserFetching.fetchSigninUser) => ({ type: FETCH_SIGNIN_USER, payload: data })
export const setFetchSignupUser = (data: typeof initialStateUserFetching.fetchSignupUser) => ({ type: FETCH_SIGNUP_USER, payload: data })
export const setFetchUserinfo = () => ({type: FETCH_USERINFO, payload: null})
export const setFetchUser = (id: string) => ({type: FETCH_USER, payload: id})

export const userFetchingActions = {
    FETCH_SIGNUP_USER, FETCH_SIGNIN_USER, FETCH_USER, FETCH_USERINFO
}