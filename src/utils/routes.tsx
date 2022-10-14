import React, {useEffect} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { AuthPage } from '../components/pages/public/auth'
import {AuthUtil} from "./auth";
import PrivateRoutes from "../components/pages/private";
import PublicRoutes from "../components/pages/public";

export const useRoutes = (): JSX.Element => {
    const authpages = AuthPage()
    const {username, token} = useAppSelector(state => state.userReducer)
    const {login, userStorageName} = AuthUtil()

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem(userStorageName) || '{}')

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