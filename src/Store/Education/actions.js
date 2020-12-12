import { createAsyncThunk } from '@reduxjs/toolkit'
import { EducationService } from '../../Services/EducationService'

export const allEducations = createAsyncThunk('Education/getAllEducations', async () => {
  const response = await EducationService.getAllEducations()
  return response.docs.map(doc => doc.data())
})

export const lastEducation = createAsyncThunk('Education/getLastEducation', async () => {
  const response = await EducationService.getLastEducation()
  return response.docs.map(doc => doc.data())[0]
})
