import {InitialState} from "./types";
import {postsActions, setFetchPosts} from "./actions";


const initialState:InitialState = {
    posts: [],
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
     case postsActions.FETCHING_POSTS:
       return {
         ...state,
          fetching: action.payload
       }
     default:
       return  state
   }
}