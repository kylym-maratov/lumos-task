import {InitialState} from "./types";
import {loadingActions} from "./actions";


const initialState: InitialState = {
    loading: false,
    successMessage: '',
    failedMessage: ''
}

export default  function loadingReducer(state = initialState, action: any) {
    switch (action.type) {
        case loadingActions.SET_LOADING:
            return  {
                ...state,
                loading: action.payload
            }
        case loadingActions.SET_SUCCESS_MESSAGE:
            return  {
                ...state,
                successMessage: action.payload
            }
        case loadingActions.SET_FAILED_MESSAGE:
            return {
                ...state,
                failedMessage: action.payload
            }
        default:
            return state
    }
}