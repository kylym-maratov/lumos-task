import { InitialStateUserTypes } from "./types"
import { userActions } from "../../actions/user.action"
import userFetchReducer from "./fetching";

const initialStateUser: InitialStateUserTypes = {
    username: '',
    token: '',
    userid: ''
}

function userReducer(state = initialStateUser, action: any) {
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
        case userActions.SET_USER_ID:
            return {
                ...state,
                userid: action.payload
            }
        default:
            return state
    }
}

export default {userReducer, userFetchReducer}