import { createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import loadingReducer from './reducers/loading';
import userReducer from './reducers/user';
import {mySaga} from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    userReducer: userReducer,
    loadingReducer: loadingReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


sagaMiddleware.run(mySaga)

