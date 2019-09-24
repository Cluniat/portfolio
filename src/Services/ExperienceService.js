import {db} from "../firebase";

export function getAllExperiences() {
    return db.collection("experience")
        .orderBy("start", "desc")
        .get()
}

export function getLastExperience() {
    return  db.collection("experience")
         .orderBy("start", "desc")
        .limit(1)
        .get()
}

export const ExperienceService = {
    getAllExperiences,
    getLastExperience,
}