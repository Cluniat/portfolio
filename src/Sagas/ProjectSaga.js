import { put, call } from 'redux-saga/effects'
import ProjectAction from "../Store/Project/actions"
import {ProjectService} from "../Services/ProjectService";

export function* getLastProject() {
    let response = yield call(ProjectService.getLastProject)
    response = response.docs.map(doc => doc.data())[0];
    if(response) {
        yield put (ProjectAction.lastProjectSuccess(response));
    }
    else {
        yield put (ProjectAction.lastProjectFailure('error'));
    }
}
export function* getAllProjects() {
    let response = yield call(ProjectService.getAllProjects)
    response = response.docs.map(doc => doc.data());
    if(response) {
        yield put (ProjectAction.allProjectsSuccess(response));
    }
    else {
        yield put (ProjectAction.allProjectsFailure('error'));
    }
}