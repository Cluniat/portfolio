import { INITIAL_STATE } from './initialState'
import { createSlice } from '@reduxjs/toolkit'
import { allEducations, lastEducation } from './actions'

export const lastEducationLoading = (state) => ({
  ...state,
  lastEducation: {
    data: null,
    loading: true,
    error: null,
  },
})

export const lastEducationSuccess = (state, { payload }) => ({
  ...state,
  lastEducation: {
    data: payload,
    loading: false,
    error: null,
  },
})

export const lastEducationFailure = (state, { payload }) => ({
  ...state,
  lastEducation: {
    data: null,
    loading: false,
    error: payload,
  },
})

export const allEducationsLoading = (state) => ({
  ...state,
  educations: {
    data: null,
    loading: true,
    error: null,
  },
})

export const allEducationsSuccess = (state, { payload }) =>
  ({
    ...state,
    educations: {
      data: payload,
      loading: false,
      error: null,
    },
  })

export const allEducationsFailure = (state, { payload }) => ({
  ...state,
  educations: {
    data: null,
    loading: false,
    error: payload,
  },
})

export const educationReducer = createSlice({
  name: 'educations',
  initialState: INITIAL_STATE,
  extraReducers: {
    [allEducations.fulfilled]: allEducationsSuccess,
    [allEducations.rejected]: allEducationsFailure,
    [allEducations.pending]: allEducationsLoading,
    [lastEducation.fulfilled]: lastEducationSuccess,
    [lastEducation.rejected]: lastEducationFailure,
    [lastEducation.pending]: lastEducationLoading,
  },
}).reducer
