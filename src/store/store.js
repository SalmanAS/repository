import {createStore, combineReducers, applyMiddleware} from 'redux';
import appReducer from '../reducers/appreducer';
import loggerMiddleWare from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({appReducer});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleWare));