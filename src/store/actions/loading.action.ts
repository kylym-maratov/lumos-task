

const SET_LOADING = 'SET_LOADING'
const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE'
const SET_FAILED_MESSAGE = 'SET_FAILED_MESSAGE'

export const setLoading = (loading: boolean) => ({type: SET_LOADING, payload: loading})
export const setSuccessMesssage = (success: string) => ({type: SET_SUCCESS_MESSAGE, payload: success})
export const setFailedMessage = (error: string) => ({type: SET_FAILED_MESSAGE, payload: error})


export const loadingActions = {SET_LOADING, SET_SUCCESS_MESSAGE, SET_FAILED_MESSAGE}