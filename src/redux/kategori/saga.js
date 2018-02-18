import {all, takeEvery, put, fork, call} from 'redux-saga/effects';
import axios from '../axios';
import * as type from '../type';

export function* getDataKategori() {
    yield takeEvery(type.GET_DATA_KATEGORI, function* api() {
        try {
            const response = yield call(axios.get, "coba");
            yield put({
                type: type.GET_DATA_KATEGORI_S,
                dataKategori: response.data
            })
        } catch (e) {
            console.log('fetch data failed', e);
            yield put({type: type.GET_DATA_KATEGORI_E});
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(getDataKategori),

    ])
}