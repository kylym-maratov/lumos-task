import {all} from "redux-saga/effects";
import {userWatcher} from "./sagas/user.saga";

export default  function* rootSagaWatcher () {
    yield all([userWatcher()])
}