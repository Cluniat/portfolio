import { takeLatest, all } from 'redux-saga/effects'
import {EducationTypes} from "../Store/Education/actions";
import {ExperienceTypes} from "../Store/Experience/actions";
import {getLastEducation, getAllEducations} from "./EducationSaga";
import {getLastExperience, getAllExperiences} from "./ExperienceSaga";

export default function* root() {
    yield all([
        // Call `getLAstEducation()` when a `LAST_EDUCATION` action is triggered (type, saga)
        takeLatest(EducationTypes.LAST_EDUCATION, getLastEducation),
        takeLatest(EducationTypes.ALL_EDUCATIONS, getAllEducations),
        takeLatest(ExperienceTypes.ALL_EXPERIENCES, getAllExperiences),
        takeLatest(ExperienceTypes.LAST_EXPERIENCE, getLastExperience),
    ])
}