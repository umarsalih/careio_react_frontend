import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: true
  },
  reducers: {
    toggleLogin(state){
        state.isLoggedIn = !state.isLoggedIn
    },
    setLogin(state, action){
      state.isLoggedIn = action.payload
    },
  }
})
export const isLoggedIn = (state) => state.login.isLoggedIn
export const { toggleLogin, setLogin } = loginSlice.actions
export default loginSlice.reducer