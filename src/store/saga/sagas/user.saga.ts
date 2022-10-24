import {call, put, takeEvery} from "redux-saga/effects";
import {requestApi} from "../../../api";
import {API_URLS} from "../../../constants/api";
import {setUsername, setUserToken} from "../../actions/user.action";
import {userFetchingActions }from "../../actions/user.fetching.action";
import {setFailedMessage, setLoading, setSuccessMesssage} from "../../actions/loading.action";


function* signinUserWorker({payload} : any) {
    try {
        yield put(setFailedMessage(''))
        yield put(setLoading(true))
        const {data} = yield call(requestApi, API_URLS.signin, JSON.stringify({...payload}), 'POST')
        yield put(setUsername(data.data.userData.username))
        yield put(setUserToken(data.data.token))
    } catch (e) {
        yield put(setFailedMessage((e as any).response.data.error || 'Unknown error'))
    } finally {
        yield put(setLoading(false))
    }
}

function* signupUserWorker({payload} : any) {
    try {
        yield put(setFailedMessage(''))
        yield put(setLoading(true))
        const {data} = yield call(requestApi, API_URLS.signup, JSON.stringify({...payload}), 'POST')
        yield put(setSuccessMesssage(data.message))
    } catch (e) {
        yield put(setFailedMessage((e as any).response.data.error || 'Unknown error'))
    }
    finally {
        yield put(setLoading(false))
    }
}

function* fetchUserWorker({payload} : any) {
    try {
        const {data} = yield call(requestApi, `${API_URLS.profile}/${payload}`)
        console.log(data)
    } catch (e)
    {
        yield put(setFailedMessage((e as any).response.data.error || 'Unknown error'))
    }

}

export function* userWatcher() {
    yield takeEvery(userFetchingActions.FETCH_SIGNUP_USER, signupUserWorker)
    yield takeEvery(userFetchingActions.FETCH_SIGNIN_USER, signinUserWorker)
    yield takeEvery(userFetchingActions.FETCH_USER, fetchUserWorker)
}