import * as types from '../constants/index';

let initialState = {
    flightList: [],
    weatherList: [],
    num: 0,
    error: '',
    detail: '',
    content: ''
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.TEST_SUCESS:
            return Object.assign({}, state, {
                num: ++state.num
            });
        case types.TEST_FAIL:
            return Object.assign({}, state, {
                error: action
            });
        case types.TEST_BEGIN_SYN:
            return Object.assign({}, state, {
                num: state.num+10
            });
        case types.GET_LIST_DATA:
            return Object.assign({}, state, {
                flightList: action.data.datalist
            });
        case types.GET_DETAIL:
            return Object.assign({}, state, {
                detail: action.payload.data,
                content: action.payload.content.content
            });
        default:
            return state
    }
}