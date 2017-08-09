import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers/reducers';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
}
