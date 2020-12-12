import {INITIAL_STATE} from './initialState';
import {createSlice} from "@reduxjs/toolkit";
import {allProjects, lastProject} from "./actions";

const lastProjectLoading = (state) => ({
    ...state,
    lastProject: {
        data: null,
        loading: true,
        error: null
    }
})

const lastProjectSuccess = (state, {payload}) => (
    {
        ...state,
        lastProject:
    {
        data: payload,
        loading: false,
        error: null
    }
})

const lastProjectFailure = (state, {payload}) => ({
    ...state,
    lastProject: {
        data: null,
        loading: false,
        error: payload
    }
})

const allProjectsLoading = (state) => ({
        ...state,
        projects: {
            data: null,
            loading: true,
            error: null
        }
})

const allProjectsSuccess = (state, {payload}) =>
    ({
    ...state,
        projects: {
        data: payload,
        loading: false,
        error: null
    }
})

const allProjectsFailure = (state, {payload}) => ({
    ...state,
    projects: {
        data: null,
        loading: false,
        error: payload
    }
})

export const projectReducer = createSlice({
    name: 'projects',
    initialState: INITIAL_STATE,
    extraReducers: {
        [allProjects.fulfilled]: allProjectsSuccess,
        [allProjects.rejected]: allProjectsFailure,
        [allProjects.pending]: allProjectsLoading,
        [lastProject.fulfilled]: lastProjectSuccess,
        [lastProject.rejected]: lastProjectFailure,
        [lastProject.pending]: lastProjectLoading,
    }
}).reducer;

