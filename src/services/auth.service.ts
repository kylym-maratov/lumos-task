import {useAppDispatch} from "../store/hooks";
import {setUsername, setUserToken} from "../store/reducers/user/actions";
import {useCallback} from "react";
import {removeStorage, setStorage} from "./storage.service";

export const userStorageName= 'userStorage'

export const AuthService = () => {
    const dispatch = useAppDispatch()

    const login = useCallback((username: string, token: string) => {
        setStorage(userStorageName, JSON.stringify({username, token}))

        dispatch(setUsername(username))
        dispatch(setUserToken(token))
    }, [])

    const logout = useCallback(() => {
        removeStorage(userStorageName)
        dispatch(setUsername(''))
        dispatch(setUserToken(''))
    }, [])


    return {login, logout, userStorageName}
}