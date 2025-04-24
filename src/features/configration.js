import { createSlice } from '@reduxjs/toolkit'

const configrationSlice = createSlice({
  name: 'configration',
  initialState: {
    value: []
  },
  reducers: {
    setConfigration: (state, action) => {
      state.value = action.payload
    },
    updateRole: (state, action) => {
      const index = state.value.role.findIndex((data) => data.id === action.payload.role.id)
      state.value.role[index] = action.payload.role
    },
    setNewTool: (state, action) => {
      state.value.tool_rates.push(action.payload)
    },
    updateTool: (state, action) => {
      const index = state.value.tool_rates.findIndex((data) => data.id === action.payload.id)
      state.value.tool_rates[index] = action.payload
    },
    deleteTool: (state, action) => {
      const index = state.value.tool_rates.findIndex((data) => data.id === action.payload.id)
      state.value.tool_rates.splice(index, 1)
    }
  }
})


export const { setConfigration,  updateRole, setNewTool, updateTool, deleteTool } = configrationSlice.actions
export default configrationSlice.reducer