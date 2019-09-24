import { takeLatest, all } from 'redux-saga/effects'
import {EducationTypes} from "../Store/Education/actions";
import {ExperienceTypes} from "../Store/Experience/actions";
import {ProjectTypes} from "../Store/Project/actions";
import {getLastEducation, getAllEducations} from "./EducationSaga";
import {getLastExperience, getAllExperiences} from "./ExperienceSaga";
import {getAllProjects, getLastProject} from "./ProjectSaga";

export default function* root() {
    yield all([
        // Call `getLAstEducation()` when a `LAST_EDUCATION` action is triggered (type, saga)
        takeLatest(EducationTypes.LAST_EDUCATION, getLastEducation),
        takeLatest(EducationTypes.ALL_EDUCATIONS, getAllEducations),
        takeLatest(ExperienceTypes.ALL_EXPERIENCES, getAllExperiences),
        takeLatest(ExperienceTypes.LAST_EXPERIENCE, getLastExperience),
        takeLatest(ProjectTypes.LAST_PROJECT, getLastProject),
        takeLatest(ProjectTypes.ALL_PROJECTS, getAllProjects),
    ])
}