import React, {useEffect} from 'react'
import { useAppSelector } from '../store/hooks'
import {AuthUtil} from "./auth.service";
import PrivateRoutes from "../components/pages/private";
import PublicRoutes from "../components/pages/public";
import {getStorage} from "./storage.service";

export const useRoutes = (): JSX.Element => {

    const {username, token} = useAppSelector(state => state.userReducer)
    const {login, userStorageName} = AuthUtil()

    useEffect(() => {
        let user = getStorage(userStorageName)

        if (user) {
            login(user.username, user.token)
        }
    }, [token])

    useEffect(() => {
        if (username && token) {
            login(username, token)
        }
    }, [username, token])

    if (!!token) return ( <PrivateRoutes />)

    return (<PublicRoutes />)
}