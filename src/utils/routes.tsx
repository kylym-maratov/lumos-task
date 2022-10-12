import React, {useEffect} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { AuthPage } from '../components/pages/auth'
import { HomePage } from '../components/pages/home'
import {ProfilePage} from "../components/pages/profile";


export const useRoutes = (): JSX.Element => {
    const authpages = AuthPage()
    const token = !!useAppSelector(state => state.userReducer.token)

    useEffect(() => {

    }, [token])

    if (token) {
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