import axios from "axios"
import { useCallback } from "react"
import { setError } from "../store/reducers/loading/actions"

export const SignupApi = (dispatch: any) => {

    const postRequest = useCallback(async (url: string, body: any, headers = {}) => {

        headers = {
            "Content-Type": "application/json"
        }

        try {
            const { data } = await axios.post(url, body, headers)
            return data
        } catch (e) {
            dispatch(setError((e as any).response.data.error))
        }
    }, [])


    return {  postRequest }
}