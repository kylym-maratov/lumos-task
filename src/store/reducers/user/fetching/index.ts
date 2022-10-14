import { userFetchingActions } from "./actions";
import { InitialState } from "./types";

export const initialState: InitialState = {
    fetchSigninUser: null,
    fetchSignupUser: null
}

export default function userFetchReducer(state = initialState, action: any) {
    switch (action.type) {
        case userFetchingActions.FETCH_SIGNIN_USER:
            return {
                ...state,
                fetchSigninUser: action.payload
            }
        case userFetchingActions.FETCH_SIGNUP_USER:
            return {
                ...state,
                fetchSignupUser: action.payload
            }
        default:
            return state
    }
}