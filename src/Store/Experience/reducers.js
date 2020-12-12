import {INITIAL_STATE} from './initialState';
import {createSlice} from "@reduxjs/toolkit";
import {allExperiences, lastExperience} from "./actions";

export const lastExperienceLoading = (state) => ({
    ...state,
    lastExperience: {
        data: null,
        loading: true,
        error: null
    }
})

export const lastExperienceSuccess = (state, {payload}) => ({
    ...state,
    lastExperience: {
        data: payload,
        loading: false,
        error: null
    }
})

export const lastExperienceFailure = (state, {payload}) => ({
    ...state,
    lastExperience: {
        data: null,
        loading: false,
        error: payload
    }
})


export const allExperiencesLoading = (state) => ({
    ...state,
    experiences: {
        data: null,
        loading: true,
        error: null
    }
})

export const allExperiencesSuccess = (state, {payload}) =>
    ({
    ...state,
    experiences: {
        data: payload,
        loading: false,
        error: payload
    }
})

export const allExperiencesFailure = (state, {payload}) => ({
    ...state,
    experiences: {
        data: null,
        loading: false,
        error: payload
    }
})

export const experienceReducer= createSlice({
    name: 'experiences',
    initialState: INITIAL_STATE,
    extraReducers: {
        [allExperiences.fulfilled]: allExperiencesSuccess,
        [allExperiences.rejected]: allExperiencesFailure,
        [allExperiences.pending]: allExperiencesLoading,
        [lastExperience.fulfilled]: lastExperienceSuccess,
        [lastExperience.rejected]: lastExperienceFailure,
        [lastExperience.pending]: lastExperienceLoading,
    }
}).reducer;


