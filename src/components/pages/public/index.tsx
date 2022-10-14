import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthPage} from "./auth";

export  default function  PublicRoutes (): JSX.Element {
    const authPage = AuthPage()

    return (
        <Routes>
            <Route path="/signin" element={authPage.signin} />
            <Route path="/signup" element={authPage.signup} />
            <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
    );
};

