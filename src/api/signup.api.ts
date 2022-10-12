import axios from "axios"
import { useCallback } from "react"
import {setError, setLoading} from "../store/reducers/loading/actions"

export const SignupApi = (dispatch: any) => {

    const postRequest = useCallback(async (url: string, body: any, headers = {}) => {

        headers = {
            "Content-Type": "application/json"
        }

        try {
            dispatch(setLoading(true))
            dispatch(setError(''))
            const { data } = await axios.post(url, body, headers)
            dispatch(setLoading(false))
            return data
        } catch (e) {
            dispatch(setLoading(false))
            dispatch(setError((e as any).response.data.error || 'Unknown error'))
        }
    }, [])


    return {  postRequest }
}