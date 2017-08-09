import test from './test';
import getFetch from './getFetch';
import getArr from './arr';

export default function* rootSaga () {
    yield [
        test(),
        getFetch(),
        getArr()
    ]
}