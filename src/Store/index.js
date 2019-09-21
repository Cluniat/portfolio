import {combineReducers} from "redux";
import configureStore from './createStore'
import rootSaga from '../Sagas'

import {reducer as EducationReducer} from './Education/reducers'

export default () => {
    const rootReducer = combineReducers({
        educations: EducationReducer,
    })

    return configureStore(rootReducer, rootSaga)
}