/**
 * Created by yangchaoben on 2017/8/9.
 * 非阻塞saga测试
 */
import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from '../constants/index';

import {apiGet} from '../api/index';

function* loadArr () {
    try {
        const [data, content] = yield [call(getDetail), call(getContent)];
        yield put({type: types.GET_DETAIL, payload: {data, content}})
    }
    catch (error) {
        yield put({type: types.TEST_FAIL, error})
    }
}

function getDetail () {
    return apiGet('http://rapapi.org/mockjs/22209/detail?');
}

function getContent () {
    return apiGet('http://rapapi.org/mockjs/22209/info?');
}

export default function* getArr () {
    yield takeEvery(types.GET_DETAIL_BEGIN, loadArr)
}
