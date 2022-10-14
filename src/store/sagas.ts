import { call, put,all, takeEvery, takeLatest } from 'redux-saga/effects'


function* fetchSignupUser( ) {
    try {

    } catch (e) {

    }
}


export function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchSignupUser);
}


