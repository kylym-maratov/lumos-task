import React from "react";
import {HomePage} from "./home";
import {Navigate, Routes, Route} from "react-router-dom";
import {PostsPage} from "./posts";
import {ProfilePage} from "./profile";


export default function PrivateRoutes (): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}