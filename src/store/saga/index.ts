import {all} from "redux-saga/effects";
import {userWatcher} from "./sagas/user.saga";
import {postsWatcher} from "./sagas/posts.saga";

export default  function* rootSagaWatcher () {
    yield all([userWatcher(), postsWatcher()])
}