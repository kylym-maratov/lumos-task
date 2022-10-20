import React from 'react'
import {AuthUtil} from "../../../../services/auth.service";
import {Header} from "../../../modules/header";
import {Posts} from "../../../modules/posts";


export const HomePage = (): JSX.Element => {

    return (
          <div>
              <Header />
              <Posts />
          </div>
    )
}