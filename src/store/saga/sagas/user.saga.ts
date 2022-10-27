import {call, put, takeEvery} from "redux-saga/effects";
import {requestApi} from "../../../api";
import {API_URLS} from "../../../constants/api";
import {setUserid, setUsername, setUserToken} from "../../actions/user.action";
import {userFetchingActions }from "../../actions/user.fetching.action";
import { setSuccessMesssage} from "../../actions/loading.action";


function* signinUserWorker({payload} : any) {
    try {
        const {data} = yield call(requestApi, API_URLS.signin, JSON.stringify({...payload}), 'POST')
        yield put(setUsername(data.data.userData.username))
        yield put(setUserToken(data.data.token))
    } catch (e) {}
}

function* signupUserWorker({payload} : any) {
    try {
        const {data} = yield call(requestApi, API_URLS.signup, JSON.stringify({...payload}), 'POST')
        yield put(setSuccessMesssage(data.message))
    } catch (e) {}
}

function* fetchUserWorker({payload} : any) {
    try {
        const {data} = yield call(requestApi, `${API_URLS.profile}/${payload}`)
    } catch (e) {}
}

function* fetchUserInfoWorker() {
    try {
        const {data} = yield call(requestApi, API_URLS.userInfo)
        yield put(setUserid(data.id))
        yield put(setUsername(data.user))
    } catch (e) {}
}

export function* userWatcher() {
    yield takeEvery(userFetchingActions.FETCH_SIGNUP_USER, signupUserWorker)
    yield takeEvery(userFetchingActions.FETCH_SIGNIN_USER, signinUserWorker)
    yield takeEvery(userFetchingActions.FETCH_USER, fetchUserWorker)
    yield takeEvery(userFetchingActions.FETCH_USERINFO, fetchUserInfoWorker)
}