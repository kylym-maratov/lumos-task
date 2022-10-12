import { loadingActions } from "./actions";
import { InitialState } from "./types";


const initialState: InitialState = {
    loading: false,
    error: ''
}

export default function loadingReducer(state = initialState, action: any) {
    switch (action.type) {
        case loadingActions.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case loadingActions.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}