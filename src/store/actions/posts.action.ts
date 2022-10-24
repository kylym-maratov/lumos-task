
const SET_POSTS = 'SET_POSTS'
const SET_POST = 'SET_POST'
const SET_FETCHING_POSTS = 'SET_FETCH_POSTS'
const SET_FETCHING_POST = 'FETCHING_POST'

export const setPosts = (posts: any) => ({type: SET_POSTS, payload: posts})
export const setFetchPosts = (bool: boolean) => ({type: SET_FETCHING_POSTS, payload: bool})
export const setFetchPost = (id: string) => ({type: SET_FETCHING_POST, payload: id})
export const setPost = (data: any) => ({type: SET_POST, payload: data})

export const postsActions = {SET_POSTS, SET_FETCHING_POST, SET_FETCHING_POSTS, SET_POST}