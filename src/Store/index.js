import { configureStore, combineReducers} from "@reduxjs/toolkit";
import {experienceReducer} from './Experience/reducers';
import {projectReducer} from './Project/reducers';
import {educationReducer} from "./Education/reducers";

const rootReducer = combineReducers({
    educations: educationReducer,
    experiences: experienceReducer,
    projects: projectReducer

})


export const store = configureStore({reducer: rootReducer});
