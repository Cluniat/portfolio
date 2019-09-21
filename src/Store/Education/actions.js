import {createActions} from "reduxsauce";

const { Types, Creators } = createActions( {
    allEducations: null,
    allEducationsSuccess: ['educations'],
    allEducationsFailure: ['error'],

    lastEducation: null,
    lastEducationSuccess: ['lastEducation'],
    lastEducationFailure: ['error'],
})

export const EducationTypes = Types
export default Creators

