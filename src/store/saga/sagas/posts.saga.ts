import {call, put, takeEvery} from "redux-saga/effects";
import {setFailedMessage, setLoading} from "../../actions/loading.action";
import {requestApi} from "../../../api";
import {API_URLS} from "../../../constants/api";
import {postsActions, setPost, setPosts} from "../../actions/posts.action";


function* getPostsWorker ({payload} : any) {
  try {
    yield put(setFailedMessage(''))
    yield put(setLoading(true))
    const {data} = yield call(requestApi, `${API_URLS.posts}`)
    yield put(setPosts(payload.page ? data.result : data))
  } catch (e) {
    yield put(setFailedMessage((e as any).response.data.error || 'Unknown error'))
  } finally {
    yield put(setLoading(false))
  }
}

function* getPostWorker({payload} : any) {
  try {
    yield put(setFailedMessage(''))
    yield put(setLoading(true))
    const {data} = yield call(requestApi, `${API_URLS.posts}/${payload}`)
    yield put(setPost(data))
  } catch (e) {
    yield put(setFailedMessage((e as any).response.data.error || 'Unknown error'))
  } finally {
    yield put(setLoading(false))
  }
}

export function* postsWatcher() {
  yield takeEvery(postsActions.SET_FETCHING_POSTS, getPostsWorker)
  yield takeEvery(postsActions.SET_FETCHING_POST, getPostWorker)
}