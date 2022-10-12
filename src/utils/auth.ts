import {useAppDispatch} from "../store/hooks";
import {setUsername, setUserToken} from "../store/reducers/user/actions";
import {useCallback} from "react";


const userStorageName= 'userStorage'

export const AuthUtil = () => {
    const dispatch = useAppDispatch()

    const login = useCallback((username: string, token: string) => {
        localStorage.setItem(userStorageName, JSON.stringify({username, token}))

        dispatch(setUsername(username))
        dispatch(setUserToken(token))
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem(userStorageName)
        dispatch(setUsername(''))
        dispatch(setUserToken(''))
    }, [])



    return {login, logout, userStorageName}
}