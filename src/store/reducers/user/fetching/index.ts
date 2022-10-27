import { userFetchingActions } from "../../../actions/user.fetching.action";
import { InitialStateUserFetchingTypes} from "./types";

export const initialStateUserFetching: InitialStateUserFetchingTypes = {
    fetchSigninUser: null,
    fetchSignupUser: null,
    fetchUser: null
}

export default function userFetchReducer(state = initialStateUserFetching, action: any) {
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
        case userFetchingActions.FETCH_USER:
            return {
                ...state,
                fetchUser: action.payload
            }
        case userFetchingActions.FETCH_USERINFO:
            return {
                ...state
            }
        default:
            return state
    }
}