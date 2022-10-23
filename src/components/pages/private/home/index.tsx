import React, {useEffect} from 'react'
import {Header} from "../../../modules/header";
import {Posts} from "../../../modules/posts";
import {HomePageWrapper} from "./styled";
import {UserContainer} from "./components/user";


export const HomePage = (): JSX.Element => {


    return (
          <div>
              <Header />
              <HomePageWrapper>
                <Posts />
                <UserContainer />
              </HomePageWrapper>
          </div>
    )
}