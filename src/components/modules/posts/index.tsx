import React, {useEffect} from 'react';
import {PostsWrapper} from "./styles";
import {Post} from "./components/post";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {setFetchPosts} from "../../../store/actions/posts.action";


export const Posts = () => {
  const {posts} = useAppSelector(state => state.postsReducer)
  const dispatch = useAppDispatch()
    useEffect(() => {
       dispatch(setFetchPosts({page: 0}))
    }, [])
    return (
        <PostsWrapper>
          {posts.length ? posts.map((item: any, i: number) => {
            return <Post item={{...item}} detail={false} key={i}/>
          }) : "No posts"}
        </PostsWrapper>
    );
};

