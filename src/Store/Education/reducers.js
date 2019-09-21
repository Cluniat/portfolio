import {INITIAL_STATE} from './initialState'
import {createReducer} from "reduxsauce";
import {EducationTypes} from "./actions";

export const lastEducationRequest = (state) => ({
    ...state,
    lastEducation: {
        data: null,
        loading: true,
        error: null
    }
})

export const lastEducationSuccess = (state, {lastEducation}) => ({
    ...state,
    lastEducation: {
        data: lastEducation,
        loading: false,
        error: null
    }
})

export const lastEducationFailure = (state, {error}) => ({
    ...state,
    lastEducation: {
        data: null,
        loading: false,
        error: error
    }
})


export const allEducationsRequest = (state) => ({
    ...state,
    educations: {
        data: null,
        loading: true,
        error: null
    }
})

export const allEducationsSuccess = (state, {educations}) =>
    ({
    ...state,
    educations: {
        data: educations,
        loading: false,
        error: null
    }
})

export const allEducationsFailure = (state, {error}) => ({
    ...state,
    lastEducation: {
        data: null,
        loading: false,
        error: error
    }
})

export const reducer = createReducer(INITIAL_STATE, {
    [EducationTypes.LAST_EDUCATION]: lastEducationRequest,
    [EducationTypes.LAST_EDUCATION_SUCCESS]: lastEducationSuccess,
    [EducationTypes.LAST_EDUCATION_FAILURE]: lastEducationFailure,

    [EducationTypes.ALL_EDUCATIONS]: allEducationsRequest,
    [EducationTypes.ALL_EDUCATIONS_SUCCESS]: allEducationsSuccess,
    [EducationTypes.ALL_EDUCATIONS_FAILURE]: allEducationsFailure,
})


