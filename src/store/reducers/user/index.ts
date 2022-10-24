import { InitialState } from "./types"
import { userActions } from "../../actions/user.action"
import userFetchReducer from "./fetching";

const initialState: InitialState = {
    username: '',
    token: '',
}

function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case userActions.SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case userActions.SET_USER_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}

export default {userReducer, userFetchReducer}