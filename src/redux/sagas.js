import {all} from 'redux-saga/effects';
import kategoriSaga from './kategori/saga'

export default function* rootSaga(){
    yield all([
        kategoriSaga(),

    ]);
}