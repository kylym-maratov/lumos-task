import { createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootUserReducer from './reducers/user';
import rootSagaWatcher from './saga/index'
import loadingReducer from "./reducers/loading";
import postsReducer from './reducers/posts/index'
import {composeWithDevTools} from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
   ...rootUserReducer,
   loadingReducer,
   postsReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSagaWatcher)

