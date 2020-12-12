import { createAsyncThunk } from '@reduxjs/toolkit'
import { ExperienceService } from '../../Services/ExperienceService'

export const allExperiences = createAsyncThunk('Experience/getAllExperiences', async () => {
  const response = await ExperienceService.getAllExperiences()
  return response.docs.map(doc => doc.data())
})

export const lastExperience = createAsyncThunk('Experience/getLastExperience', async () => {
  const response = await ExperienceService.getAllExperiences()
  return response.docs.map(doc => doc.data())[0]
})
