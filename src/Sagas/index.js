import { takeLatest, all } from 'redux-saga/effects'
import {EducationTypes} from "../Store/Education/actions";
import {getLastEducation} from "./EducationSaga";

export default function* root() {
    yield all([
        // Call `getLAstEducation()` when a `LAST_EDUCATION` action is triggered (type, saga)
        takeLatest(EducationTypes.LAST_EDUCATION, getLastEducation),
    ])
}