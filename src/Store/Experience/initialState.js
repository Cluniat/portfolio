import { Map } from 'immutable'

export const INITIAL_STATE = Map({
  experiences: {
    data: [],
    loading: false,
    error: null,
  },

  lastExperience: {
    data: null,
    loading: false,
    error: null,
  },
})
