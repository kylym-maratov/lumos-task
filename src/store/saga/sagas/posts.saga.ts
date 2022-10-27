import {call, put, takeEvery} from "redux-saga/effects";
import {requestApi} from "../../../api";
import {API_URLS} from "../../../constants/api";
import {postsActions, setPost, setPosts} from "../../actions/posts.action";


function* getPostsWorker ({payload} : any) {
  try {
    const url = payload.page ? `${API_URLS.posts}?page=${payload.page}` : API_URLS.posts
    const {data} = yield call(requestApi, url)
    yield put(setPosts(payload.page ? data.result : data))
  } catch (e) {}
}

function* getPostWorker({payload} : any) {
  try {
    const {data} = yield call(requestApi, `${API_URLS.posts}/${payload}`)
    yield put(setPost(data))
  } catch (e) {}
}

function* setPostLikeWorker({payload}: any) {
  try {
      const {data} = yield call(
        requestApi,
        `${API_URLS.likes}/${payload.post_id}`,
        JSON.stringify({like: payload.like}),
        'PUT')
    console.log(data)
  } catch (e) {}
}

export function* postsWatcher() {
  yield takeEvery(postsActions.SET_FETCHING_POSTS, getPostsWorker)
  yield takeEvery(postsActions.SET_FETCHING_POST, getPostWorker)
  yield takeEvery(postsActions.SET_POST_LIKE, setPostLikeWorker)
}