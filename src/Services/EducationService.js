import { db } from '../firebase'

export function getAllEducations () {
  return db.collection('education')
    .orderBy('end', 'desc')
    .get()
}

export function getLastEducation () {
  return db.collection('education')
    .orderBy('end', 'desc')
    .limit(1)
    .get()
}

export const EducationService = {
  getAllEducations,
  getLastEducation,
}
