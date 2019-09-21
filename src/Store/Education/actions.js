import {createActions} from "reduxsauce";

const { Types, Creators } = createActions( {
    getEducations: null,
    getEducationsSuccess: ['educations'],
    getEducationsFailure: ['error'],

    lastEducation: null,
    lastEducationSuccess: ['lastEducation'],
    lastEducationFailure: ['error'],
})

export const EducationTypes = Types
export default Creators

