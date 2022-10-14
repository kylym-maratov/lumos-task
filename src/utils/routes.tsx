import React, {useEffect} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { AuthPage } from '../components/pages/auth'
import { HomePage } from '../components/pages/home'
import {ProfilePage} from "../components/pages/profile";
import {AuthUtil} from "./auth";


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

    if (!!token) {
        return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/signin" element={authpages.signin} />
            <Route path="/signup" element={authpages.signup} />
            <Route path="/recovery-password" element={authpages.recovery} />
            <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
    )
}