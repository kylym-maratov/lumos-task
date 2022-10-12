import { InitialState } from "./types"
import { userActions } from "./actions"

const initialState: InitialState = {
    username: '',
    token: ''
}

export default function userReducer(state = initialState, action: any) {
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