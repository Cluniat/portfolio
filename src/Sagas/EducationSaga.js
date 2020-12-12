import { put, call } from 'redux-saga/effects'
import EducationActions from "../Store/Education/actions"
import {EducationService} from "../Services/EducationService";

export function* getLastEducation() {
    let response = yield call(EducationService.getLastEducation)
    response = response.docs.map(doc => doc.data())[0];
    if(response) {
        yield put (EducationActions.lastEducationSuccess(response));
    }
    else {
        yield put (EducationActions.lastEducationFailure('error'));
    }
}
export function* getAllEducations() {
    let response = yield call(EducationService.getAllEducations)
    response = response.docs.map(doc => doc.data());
    if(response) {
        yield put (EducationActions.allEducationsSuccess(response));
    }
    else {
        yield put (EducationActions.allEducationsFailure('error'));
    }
}
