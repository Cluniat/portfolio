import {combineReducers} from "redux";
import configureStore from './createStore'
import rootSaga from '../Sagas'

import {reducer as EducationReducer} from './Education/reducers'
import {reducer as ExperienceReducer} from './Experience/reducers'

export default () => {
    const rootReducer = combineReducers({
        educations: EducationReducer,
        experiences: ExperienceReducer
    })

    return configureStore(rootReducer, rootSaga)
}