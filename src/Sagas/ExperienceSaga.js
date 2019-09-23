import { put, call } from 'redux-saga/effects'
import ExperienceAction from "../Store/Experience/actions"
import {ExperienceService} from "../Services/ExperienceService";

export function* getLastExperience() {
    let response = yield call(ExperienceService.getLastExperience)
    response = response.docs.map(doc => doc.data())[0];
    if(response) {
        yield put (ExperienceAction.lastExperienceSuccess(response));
    }
    else {
        yield put (ExperienceAction.lastExperienceFailure('error'));
    }
}
export function* getAllExperiences() {
    let response = yield call(ExperienceService.getAllExperiences)
    response = response.docs.map(doc => doc.data());
    if(response) {
        yield put (ExperienceAction.allExperiencesSuccess(response));
    }
    else {
        yield put (ExperienceAction.allExperiencesFailure('error'));
    }
}