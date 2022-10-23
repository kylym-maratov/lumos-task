import {call, put, takeEvery} from "redux-saga/effects";
import {setFailedMessage, setLoading} from "../../reducers/loading/actions";
import {requestApi} from "../../../api";
import {API_URLS} from "../../../constants/api";
import {postsActions, setPosts} from "../../reducers/posts/actions";


function* getPostsWorker () {
  try {
    yield put(setFailedMessage(''))
    yield put(setLoading(true))
    const {data} = yield call(requestApi, API_URLS.posts)
    yield put(setPosts(data))
  } catch (e) {
    yield put(setFailedMessage((e as any).response.data.error || 'Unknown error'))
  } finally {
    yield put(setLoading(false))
  }
}


export function* postsWatcher() {
  yield takeEvery(postsActions.FETCHING_POSTS, getPostsWorker)
}