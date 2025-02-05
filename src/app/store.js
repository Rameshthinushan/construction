import { configureStore } from '@reduxjs/toolkit'

import configrationReducer from '../features/configration'

export const store = configureStore({
	reducer: {
		configration: configrationReducer,
	}
})