import { configureStore } from '@reduxjs/toolkit'

import configrationReducer from '../features/configration'
import roleReducer from '../features/role'

export const store = configureStore({
	reducer: {
		configration: configrationReducer,
		role: roleReducer
	}
})