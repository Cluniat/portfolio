import { db } from '../firebase'

export function getAllProjects () {
  return db.collection('projects')
    .orderBy('index', 'asc')
    .get()
}

export function getLastProject () {
  return db.collection('projects')
    .orderBy('index', 'asc')
    .limit(1)
    .get()
}

export const ProjectService = {
  getAllProjects,
  getLastProject,
}
