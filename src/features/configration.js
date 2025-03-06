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
      console.log(state.value.role[index])
      state.value.role[index] = action.payload.role
    },
  }
})


export const { setConfigration,  updateRole } = configrationSlice.actions
export default configrationSlice.reducer