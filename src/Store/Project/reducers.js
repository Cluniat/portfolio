import {INITIAL_STATE} from './initialState'
import {createReducer} from "reduxsauce";
import {ProjectTypes} from "./actions";

export const lastProjectRequest = (state) => ({
    ...state,
    lastProject: {
        data: null,
        loading: true,
        error: null
    }
})

export const lastProjectSuccess = (state, {lastProject}) => ({
    ...state,
    lastProject: {
        data: lastProject,
        loading: false,
        error: null
    }
})

export const lastProjectFailure = (state, {error}) => ({
    ...state,
    lastProject: {
        data: null,
        loading: false,
        error: error
    }
})


export const allProjectsRequest = (state) => ({
    ...state,
    projects: {
        data: null,
        loading: true,
        error: null
    }
})

export const allProjectsSuccess = (state, {projects}) =>
    ({
    ...state,
        projects: {
        data: projects,
        loading: false,
        error: null
    }
})

export const allProjectsFailure = (state, {error}) => ({
    ...state,
    projects: {
        data: null,
        loading: false,
        error: error
    }
})

export const reducer = createReducer(INITIAL_STATE, {
    [ProjectTypes.LAST_PROJECT]: lastProjectRequest,
    [ProjectTypes.LAST_PROJECT_SUCCESS]: lastProjectSuccess,
    [ProjectTypes.LAST_PROJECT_FAILURE]: lastProjectFailure,

    [ProjectTypes.ALL_PROJECTS]: allProjectsRequest,
    [ProjectTypes.ALL_PROJECTS_SUCCESS]: allProjectsSuccess,
    [ProjectTypes.ALL_PROJECTS_FAILURE]: allProjectsFailure,
})


