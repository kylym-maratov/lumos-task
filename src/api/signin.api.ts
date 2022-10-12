import { useCallback } from 'react'
import axios from 'axios'
import { setError, setLoading } from '../store/reducers/loading/actions'

export const SigninApi = (dispatch: any) => {

    const postRequest = useCallback(async (url: string, body: any, headers = {}) => {
        try {
            const data = await axios.post(url, { body, headers })
            return data
        } catch (e) {
            dispatch(setError((e as Error).message))
        }
    }, [])

    return { postRequest }
}