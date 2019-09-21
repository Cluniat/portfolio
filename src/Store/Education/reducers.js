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

export const reducer = createReducer(INITIAL_STATE, {
    [EducationTypes.LAST_EDUCATION]: lastEducationRequest,
    [EducationTypes.LAST_EDUCATION_SUCCESS]: lastEducationSuccess,
    [EducationTypes.LAST_EDUCATION_FAILURE]: lastEducationFailure,
})


