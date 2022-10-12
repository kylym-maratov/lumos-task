import React from 'react'
import {AuthUtil} from "../../../utils/auth";


export const HomePage = (): JSX.Element => {
    const {logout} = AuthUtil()
    return (
        <div onClick={() => logout()}>Logout</div>
    )
}