

const SET_LOADING = 'SET_LOADING'
const SET_ERROR = 'SET_ERROR'
const SET_MESSAGE = 'SET_MESSAGE'

export const setLoading = (loading: boolean) => ({ type: SET_LOADING, payload: loading })
export const setError = (error: string) => ({ type: SET_ERROR, payload: error })
export const setMessage = (message: string) => ({ type: SET_MESSAGE, payload: message })


export const loadingActions = {
    SET_LOADING, SET_ERROR, SET_MESSAGE
}