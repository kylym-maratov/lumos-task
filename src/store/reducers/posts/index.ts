import {InitialStatePostsTypes} from "./types";
import {postsActions} from "../../actions/posts.action";


export const initialStatePosts:InitialStatePostsTypes = {
    posts: [],
    post_id: null,
    post: null,
    posts_data: null
}


export default  function PostsReducer (state =  initialStatePosts, action: any) {
   switch (action.type) {
     case postsActions.SET_POSTS:
       return {
         ...state,
         posts: action.payload
       }
       break
     case postsActions.SET_FETCHING_POSTS:
       return {
         ...state,
         posts_data: action.payload
       }
     case postsActions.SET_FETCHING_POST:
       return {
         ...state,
         post_id: action.payload
       }
     case postsActions.SET_POST:
       return {
         ...state,
         post: action.payload
       }
     default:
       return  state
   }
}