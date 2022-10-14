import {call, put, takeEvery} from "redux-saga/effects";
import {  userPostRequest} from "../../../api/user.api";
import {API_URLS} from "../../../constants/api";
import {setUsername, setUserToken} from "../../reducers/user/actions";
import {userFetchingActions }from "../../reducers/user/fetching/actions";
import {setFailedMessage, setLoading, setSuccessMesssage} from "../../reducers/loading/actions";
import {AuthUtil} from "../../../utils/auth";

function* signinUserWorker({payload} : any) {

    try {
        yield put(setFailedMessage(''))
        yield put(setLoading(true))
        const {data} = yield call(userPostRequest, API_URLS.signin, JSON.stringify({...payload}))
        yield  put(setUsername(data.data.userData.username))
        yield  put(setUserToken(data.data.token))
    } catch (e) {
       yield put(setFailedMessage((e as any).response.data.error || 'Unknown error'))
    }finally {
        yield put(setLoading(false))
    }
}

function* signupUserWorker({payload} : any) {
    try {
        yield put(setFailedMessage(''))
        yield put(setLoading(true))
        const {data} = yield call(userPostRequest, API_URLS.signup, JSON.stringify({...payload}))
        yield put(setSuccessMesssage(data.message))
    } catch (e) {
        yield put(setFailedMessage((e as any).response.data.error || 'Unknown error'))
    }
    finally {
        yield put(setLoading(false))
    }
}

export function* userWatcher() {
    yield takeEvery(userFetchingActions.FETCH_SIGNUP_USER, signupUserWorker)
    yield takeEvery(userFetchingActions.FETCH_SIGNIN_USER, signinUserWorker)
}