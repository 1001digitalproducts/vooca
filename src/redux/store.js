import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers';
//redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        ...reducers
    })
);

sagaMiddleware.run(rootSaga);
export default store;