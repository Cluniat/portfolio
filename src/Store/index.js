import {combineReducers} from "redux";
import configureStore from './createStore'
import rootSaga from '../Sagas'

import {reducer as EducationReducer} from './Education/reducers'
import {reducer as ExperienceReducer} from './Experience/reducers'
import {reducer as ProjectReducer} from './Project/reducers'

export default () => {
    const rootReducer = combineReducers({
        educations: EducationReducer,
        experiences: ExperienceReducer,
        projects: ProjectReducer

    })

    return configureStore(rootReducer, rootSaga)
}