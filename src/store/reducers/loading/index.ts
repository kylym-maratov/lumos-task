import { InitialStateLoadingTypes} from "./types";
import {loadingActions} from "../../actions/loading.action";


const initialStateLoading: InitialStateLoadingTypes = {
    loading: false,
    successMessage: '',
    failedMessage: ''
}

export default  function loadingReducer(state = initialStateLoading, action: any) {
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