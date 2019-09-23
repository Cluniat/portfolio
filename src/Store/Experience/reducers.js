import {INITIAL_STATE} from './initialState'
import {createReducer} from "reduxsauce";
import {ExperienceTypes} from "./actions";

export const lastExperienceRequest = (state) => ({
    ...state,
    lastExperience: {
        data: null,
        loading: true,
        error: null
    }
})

export const lastExperienceSuccess = (state, {lastExperience}) => ({
    ...state,
    lastExperience: {
        data: lastExperience,
        loading: false,
        error: null
    }
})

export const lastExperienceFailure = (state, {error}) => ({
    ...state,
    lastExperience: {
        data: null,
        loading: false,
        error: error
    }
})


export const allExperiencesRequest = (state) => ({
    ...state,
    experiences: {
        data: null,
        loading: true,
        error: null
    }
})

export const allExperiencesSuccess = (state, {experiences}) =>
    ({
    ...state,
    experiences: {
        data: experiences,
        loading: false,
        error: null
    }
})

export const allExperiencesFailure = (state, {error}) => ({
    ...state,
    experiences: {
        data: null,
        loading: false,
        error: error
    }
})

export const reducer = createReducer(INITIAL_STATE, {
    [ExperienceTypes.LAST_EXPERIENCE]: lastExperienceRequest,
    [ExperienceTypes.LAST_EXPERIENCE_SUCCESS]: lastExperienceSuccess,
    [ExperienceTypes.LAST_EXPERIENCE_FAILURE]: lastExperienceFailure,

    [ExperienceTypes.ALL_EXPERIENCES]: allExperiencesRequest,
    [ExperienceTypes.ALL_EXPERIENCES_SUCCESS]: allExperiencesSuccess,
    [ExperienceTypes.ALL_EXPERIENCES_FAILURE]: allExperiencesFailure,
})


