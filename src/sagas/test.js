/**
 * Created by yangchaoben on 2017/8/9.
 * 基本测试
 */
import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from '../constants/index';

function* testData (action) {
    try {
        yield put({type:  types.TEST_SUCESS})
    } catch (e) {
        yield put({type: types.TEST_FAIL})
    }
}

export default function* dataSaga () {
    yield takeEvery(types.TEST_BEGIN, testData)
}