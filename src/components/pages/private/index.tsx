import React from "react";
import {HomePage} from "./home";
import {Navigate, Routes, Route} from "react-router-dom";
import {ProfilePage} from "./profile";
import {PostPage} from "./post";


export default function PrivateRoutes (): JSX.Element {
    return (
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/profile" element={<ProfilePage />} />
           <Route path="/posts/:_id" element={<PostPage />} />
           <Route path="*" element={<Navigate to="/" />} />
         </Routes>
    )
}