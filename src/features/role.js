import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
  name: 'role',
  initialState: {
    value: []
  },
  reducers: {
    setAllRoles: (s, a) => {
      s.value = a.payload
    } 
  }
})

export const { setAllRoles } = roleSlice.actions
export default roleSlice.reducer