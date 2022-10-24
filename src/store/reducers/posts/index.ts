import {InitialState} from "./types";
import {postsActions} from "../../actions/posts.action";


const initialState:InitialState = {
    posts: [],
    post_id: null,
    post: null,
    fetching: false
}


export default  function PostsReducer (state = initialState, action: any) {
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
          fetching: action.payload
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