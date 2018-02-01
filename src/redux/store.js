import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import * as reducers from './reducers';
//redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware, logger];

const store = createStore(
    combineReducers({
        ...reducers
    }),
    compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);
export default store;