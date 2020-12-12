import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProjectService } from '../../Services/ProjectService'

export const allProjects = createAsyncThunk('Project/getAllProjects', async () => {
  const response = await ProjectService.getAllProjects()
  return response.docs.map(doc => doc.data())
})

export const lastProject = createAsyncThunk('Project/getLastProject', async () => {
  const response = await ProjectService.getLastProject()
  return response.docs.map(doc => doc.data())[0]
})
