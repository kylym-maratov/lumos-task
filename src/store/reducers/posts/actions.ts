
const SET_POSTS = 'SET_POSTS'
const FETCHING_POSTS = 'SET_FETCH_POSTS'

export const setPosts = (posts: any) => ({type: SET_POSTS, payload: posts})
export const setFetchPosts = (bool: boolean) => ({type: FETCHING_POSTS, payload: bool})

export const postsActions = {SET_POSTS, FETCHING_POSTS}