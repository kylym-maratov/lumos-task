import { createStore, combineReducers } from 'redux';
import loadingReducer from './reducers/loading';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
    userReducer: userReducer,
    loadingReducer: loadingReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch



