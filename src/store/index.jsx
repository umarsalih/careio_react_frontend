import { configureStore } from '@reduxjs/toolkit'
// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'
import loginReducer from './login-store'
import bookingReducer from './booking-store'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    booking: bookingReducer
  }
})