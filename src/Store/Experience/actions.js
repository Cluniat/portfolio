import {createActions} from "reduxsauce";

const { Types, Creators } = createActions( {
    allExperiences: null,
    allExperiencesSuccess: ['experiences'],
    allExperiencesFailure: ['error'],

    lastExperience: null,
    lastExperienceSuccess: ['lastExperience'],
    lastExperienceFailure: ['error'],
})

export const ExperienceTypes = Types
export default Creators

