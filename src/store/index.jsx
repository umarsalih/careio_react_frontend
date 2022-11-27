import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './login-store'
import bookingReducer from './booking-store'
import partnersReducer from './partners-store'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    booking: bookingReducer,
    partners: partnersReducer
  }
})