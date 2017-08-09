/**
 * Created by yangchaoben on 2017/8/9.
 * 异步saga测试
 */

import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from '../constants/index';

import {apiGet} from '../api/index';

function testApi () {
    return apiGet('http://rapapi.org/mockjs/22209/list')
}

function* fetchData () {
    try {
        const data = yield call(testApi);
        yield put({type:  types.GET_LIST_DATA, data: data})
    }
    catch (error) {
        yield put({type: types.TEST_FAIL, error})
    }
}

export default function* getFetch () {
    yield takeEvery(types.GET_LIST_DATA_BEGIN, fetchData)
}