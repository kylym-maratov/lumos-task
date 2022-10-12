

const SET_LOADING = 'SET_LOADING'
const SET_ERROR = 'SET_ERROR'

export const setLoading = (loading: boolean) => ({ type: SET_LOADING, payload: loading })
export const setError = (loading: string) => ({ type: SET_ERROR, payload: loading })


export const loadingActions = {
    SET_LOADING, SET_ERROR
}