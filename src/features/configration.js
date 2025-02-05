import { createSlice } from '@reduxjs/toolkit'

const configrationSlice = createSlice({
  name: 'configration',
  initialState: {
    value: []
  },
  reducers: {
    setConfigration: (state, action) => {
      state.value = action.payload
    }
  }
})


export const { setConfigration } = configrationSlice.actions
export default configrationSlice.reducer