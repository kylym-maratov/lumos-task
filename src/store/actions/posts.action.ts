import {initialStatePosts} from "../reducers/posts";

const SET_POSTS = 'SET_POSTS'
const SET_POST = 'SET_POST'
const SET_FETCHING_POSTS = 'SET_FETCH_POSTS'
const SET_FETCHING_POST = 'FETCHING_POST'
const SET_POST_LIKE = 'SET_POST_LIKE'

export const setPosts = (posts: any) => ({type: SET_POSTS, payload: posts})
export const setFetchPosts = (data: typeof initialStatePosts.posts_data) => ({type: SET_FETCHING_POSTS, payload: data})
export const setFetchPost = (id: string) => ({type: SET_FETCHING_POST, payload: id})
export const setPost = (data: any) => ({type: SET_POST, payload: data})
export const setPostLike = (data: any) => ({type: SET_POST_LIKE, payload:  data})

export const postsActions = {SET_POSTS, SET_FETCHING_POST, SET_FETCHING_POSTS, SET_POST, SET_POST_LIKE}