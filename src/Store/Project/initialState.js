import {Map} from 'immutable';

export const INITIAL_STATE = Map({
    projects: {
        data: [],
        loading: false,
        error: null
    },

    lastProject: {
        data: null,
        loading: false,
        error: null
    },
});
