import {createActions} from "reduxsauce";

const { Types, Creators } = createActions( {
    allProjects: null,
    allProjectsSuccess: ['projects'],
    allProjectsFailure: ['error'],

    lastProject: null,
    lastProjectSuccess: ['lastProject'],
    lastProjectFailure: ['error'],
})

export const ProjectTypes = Types
export default Creators

