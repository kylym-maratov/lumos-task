import React, {useEffect} from 'react'
import {Header} from "../../../modules/header";
import {Posts} from "../../../modules/posts";
import {HomePageWrapper} from "./styled";
import {useAppDispatch} from "../../../../store/hooks";
import {setFetchUserinfo} from "../../../../store/actions/user.fetching.action";


export const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch()
   useEffect(() => {
       dispatch(setFetchUserinfo())
   }, [])
    return (
          <div>
              <Header />
              <HomePageWrapper>
                <Posts />
              </HomePageWrapper>
          </div>
    )
}