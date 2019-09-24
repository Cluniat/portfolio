import {db} from "../firebase";

export function getAllProjects() {
    return db.collection("projects")
        .get()
}

export function getLastProject() {
    return  db.collection("projects")
        .where('name', '==', 'portfolio')
        .get()
}

export const ProjectService = {
    getAllProjects,
    getLastProject,
}