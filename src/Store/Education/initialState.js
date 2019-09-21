import {Map} from 'immutable';

export const INITIAL_STATE = Map({
    educations: {
        data: [],
        loading: false,
        error: null
    },

    lastEducation: {
        data: null,
        loading: false,
        error: null
    },
});
