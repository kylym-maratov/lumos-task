import React from 'react'
import {AuthUtil} from "../../../utils/auth";
import {Header} from "../../modules/header";


export const HomePage = (): JSX.Element => {
    const {logout} = AuthUtil()
    return (

          <div><Header /></div>

    )
}