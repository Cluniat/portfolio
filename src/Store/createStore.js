import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';


export default (rootReducer, rootSaga) => {
    const middleware = []
    const enhancers = []

    //SAGA
    const sagaMiddleware = createSagaMiddleware()

    middleware.push(sagaMiddleware)

    enhancers.push(applyMiddleware(...middleware))

    const store = createStore(rootReducer, compose(...enhancers))
    sagaMiddleware.run(rootSaga)

    return { store }
}